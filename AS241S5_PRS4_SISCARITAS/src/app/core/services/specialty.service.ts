import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Specialty } from '../models/doctor.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
  private http = inject(HttpClient);
  private baseUrl = environment.services.specialties + '/specialties';

  getAll(): Observable<Specialty[]> {
    return this.http.get<Specialty[]>(this.baseUrl);
  }

  getById(id: number): Observable<Specialty> {
    return this.http.get<Specialty>(`${this.baseUrl}/${id}`);
  }

  create(specialty: Specialty): Observable<ApiResponse<Specialty>> {
    return this.http.post<ApiResponse<Specialty>>(this.baseUrl, specialty);
  }

  update(id: number, specialty: Specialty): Observable<ApiResponse<Specialty>> {
    return this.http.put<ApiResponse<Specialty>>(`${this.baseUrl}/${id}`, specialty);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }
}
