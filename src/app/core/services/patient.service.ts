import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Patient, MedicalHistory } from '../models/patient.model';
import { ApiResponse, PaginatedResponse, PageRequest } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private http = inject(HttpClient);
  private baseUrl = environment.services.patients + '/patients';

  getAll(pageRequest?: PageRequest): Observable<PaginatedResponse<Patient>> {
    let params = new HttpParams();
    if (pageRequest) {
      params = params.set('page', pageRequest.page.toString());
      params = params.set('size', pageRequest.size.toString());
      if (pageRequest.sort) {
        params = params.set('sort', pageRequest.sort);
        params = params.set('direction', pageRequest.direction || 'ASC');
      }
    }
    return this.http.get<PaginatedResponse<Patient>>(this.baseUrl, { params });
  }

  getById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/${id}`);
  }

  searchByDocument(documentNumber: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/document/${documentNumber}`);
  }

  create(patient: Patient): Observable<ApiResponse<Patient>> {
    return this.http.post<ApiResponse<Patient>>(this.baseUrl, patient);
  }

  update(id: number, patient: Patient): Observable<ApiResponse<Patient>> {
    return this.http.put<ApiResponse<Patient>>(`${this.baseUrl}/${id}`, patient);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }

  getMedicalHistory(patientId: number): Observable<MedicalHistory[]> {
    return this.http.get<MedicalHistory[]>(`${this.baseUrl}/${patientId}/medical-history`);
  }

  addMedicalHistory(patientId: number, history: MedicalHistory): Observable<ApiResponse<MedicalHistory>> {
    return this.http.post<ApiResponse<MedicalHistory>>(`${this.baseUrl}/${patientId}/medical-history`, history);
  }
}
