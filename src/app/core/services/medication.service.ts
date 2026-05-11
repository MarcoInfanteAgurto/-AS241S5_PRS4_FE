import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Medication, Prescription } from '../models/medication.model';
import { ApiResponse, PaginatedResponse, PageRequest } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private http = inject(HttpClient);
  private baseUrl = environment.services.medications + '/medications';

  getAll(pageRequest?: PageRequest): Observable<PaginatedResponse<Medication>> {
    let params = new HttpParams();
    if (pageRequest) {
      params = params.set('page', pageRequest.page.toString());
      params = params.set('size', pageRequest.size.toString());
      if (pageRequest.sort) {
        params = params.set('sort', pageRequest.sort);
        params = params.set('direction', pageRequest.direction || 'ASC');
      }
    }
    return this.http.get<PaginatedResponse<Medication>>(this.baseUrl, { params });
  }

  getById(id: number): Observable<Medication> {
    return this.http.get<Medication>(`${this.baseUrl}/${id}`);
  }

  searchByName(name: string): Observable<Medication[]> {
    return this.http.get<Medication[]>(`${this.baseUrl}/search?name=${name}`);
  }

  getLowStock(): Observable<Medication[]> {
    return this.http.get<Medication[]>(`${this.baseUrl}/low-stock`);
  }

  create(medication: Medication): Observable<ApiResponse<Medication>> {
    return this.http.post<ApiResponse<Medication>>(this.baseUrl, medication);
  }

  update(id: number, medication: Medication): Observable<ApiResponse<Medication>> {
    return this.http.put<ApiResponse<Medication>>(`${this.baseUrl}/${id}`, medication);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }

  updateStock(id: number, quantity: number): Observable<ApiResponse<Medication>> {
    return this.http.patch<ApiResponse<Medication>>(`${this.baseUrl}/${id}/stock`, { quantity });
  }

  getPrescriptionsByPatient(patientId: number): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.baseUrl}/prescriptions/patient/${patientId}`);
  }

  createPrescription(prescription: Prescription): Observable<ApiResponse<Prescription>> {
    return this.http.post<ApiResponse<Prescription>>(`${this.baseUrl}/prescriptions`, prescription);
  }
}
