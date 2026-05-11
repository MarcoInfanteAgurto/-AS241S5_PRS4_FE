import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { User } from '../models/user.model';
import { ApiResponse, PaginatedResponse, PageRequest } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = environment.services.users + '/users';

  getAll(pageRequest?: PageRequest): Observable<PaginatedResponse<User>> {
    let params = new HttpParams();
    if (pageRequest) {
      params = params.set('page', pageRequest.page.toString());
      params = params.set('size', pageRequest.size.toString());
      if (pageRequest.sort) {
        params = params.set('sort', pageRequest.sort);
        params = params.set('direction', pageRequest.direction || 'ASC');
      }
    }
    return this.http.get<PaginatedResponse<User>>(this.baseUrl, { params });
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  getByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/role/${role}`);
  }

  create(user: User): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(this.baseUrl, user);
  }

  update(id: number, user: User): Observable<ApiResponse<User>> {
    return this.http.put<ApiResponse<User>>(`${this.baseUrl}/${id}`, user);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }

  changePassword(userId: number, oldPassword: string, newPassword: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.baseUrl}/${userId}/change-password`, {
      oldPassword,
      newPassword
    });
  }

  toggleStatus(id: number): Observable<ApiResponse<User>> {
    return this.http.patch<ApiResponse<User>>(`${this.baseUrl}/${id}/toggle-status`, {});
  }
}
