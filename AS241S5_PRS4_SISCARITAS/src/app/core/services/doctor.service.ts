import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Doctor, DoctorSchedule } from '../models/doctor.model';
import { ApiResponse, PaginatedResponse, PageRequest } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private http = inject(HttpClient);
  private baseUrl = environment.services.doctors + '/doctors';

  getAll(pageRequest?: PageRequest): Observable<PaginatedResponse<Doctor>> {
    let params = new HttpParams();
    if (pageRequest) {
      params = params.set('page', pageRequest.page.toString());
      params = params.set('size', pageRequest.size.toString());
      if (pageRequest.sort) {
        params = params.set('sort', pageRequest.sort);
        params = params.set('direction', pageRequest.direction || 'ASC');
      }
    }
    return this.http.get<PaginatedResponse<Doctor>>(this.baseUrl, { params });
  }

  getById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.baseUrl}/${id}`);
  }

  getBySpecialty(specialtyId: number): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}/specialty/${specialtyId}`);
  }

  create(doctor: Doctor): Observable<ApiResponse<Doctor>> {
    return this.http.post<ApiResponse<Doctor>>(this.baseUrl, doctor);
  }

  update(id: number, doctor: Doctor): Observable<ApiResponse<Doctor>> {
    return this.http.put<ApiResponse<Doctor>>(`${this.baseUrl}/${id}`, doctor);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }

  getSchedule(doctorId: number): Observable<DoctorSchedule[]> {
    return this.http.get<DoctorSchedule[]>(`${this.baseUrl}/${doctorId}/schedule`);
  }

  updateSchedule(doctorId: number, schedule: DoctorSchedule[]): Observable<ApiResponse<DoctorSchedule[]>> {
    return this.http.put<ApiResponse<DoctorSchedule[]>>(`${this.baseUrl}/${doctorId}/schedule`, schedule);
  }
}
