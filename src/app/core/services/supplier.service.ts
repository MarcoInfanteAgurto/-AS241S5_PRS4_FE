import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Supplier } from '../models/product.model';
import { ApiResponse, PaginatedResponse, PageRequest } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private http = inject(HttpClient);
  private baseUrl = environment.services.suppliers + '/suppliers';

  getAll(pageRequest?: PageRequest): Observable<PaginatedResponse<Supplier>> {
    let params = new HttpParams();
    if (pageRequest) {
      params = params.set('page', pageRequest.page.toString());
      params = params.set('size', pageRequest.size.toString());
      if (pageRequest.sort) {
        params = params.set('sort', pageRequest.sort);
        params = params.set('direction', pageRequest.direction || 'ASC');
      }
    }
    return this.http.get<PaginatedResponse<Supplier>>(this.baseUrl, { params });
  }

  getById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.baseUrl}/${id}`);
  }

  create(supplier: Supplier): Observable<ApiResponse<Supplier>> {
    return this.http.post<ApiResponse<Supplier>>(this.baseUrl, supplier);
  }

  update(id: number, supplier: Supplier): Observable<ApiResponse<Supplier>> {
    return this.http.put<ApiResponse<Supplier>>(`${this.baseUrl}/${id}`, supplier);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }

  toggleStatus(id: number): Observable<ApiResponse<Supplier>> {
    return this.http.patch<ApiResponse<Supplier>>(`${this.baseUrl}/${id}/toggle-status`, {});
  }
}
