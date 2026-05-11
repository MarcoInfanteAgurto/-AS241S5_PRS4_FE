import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from '@environments/environment';
import { LoginRequest, LoginResponse, User, UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private baseUrl = environment.services.users + '/auth';
  
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, credentials).pipe(
      tap(response => {
        this.setSession(response);
        this.currentUserSubject.next(response.user);
        this.router.navigate(['/admin/dashboard']);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  refreshToken(): Observable<LoginResponse> {
    const refreshToken = localStorage.getItem('refresh_token');
    return this.http.post<LoginResponse>(`${this.baseUrl}/refresh`, { refreshToken }).pipe(
      tap(response => this.setSession(response))
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token && !this.isTokenExpired(token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getUserRole(): UserRole | null {
    const user = this.currentUserSubject.value;
    return user?.role || null;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  hasRole(roles: UserRole[]): boolean {
    const userRole = this.getUserRole();
    return userRole ? roles.includes(userRole) : false;
  }

  private setSession(authResult: LoginResponse): void {
    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('refresh_token', authResult.refresh_token);
    localStorage.setItem('user', JSON.stringify(authResult.user));
  }

  private getUserFromStorage(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  private isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  }
}
