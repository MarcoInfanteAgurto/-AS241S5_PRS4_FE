import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Product } from '../models/product.model';
import { ApiResponse, PaginatedResponse, PageRequest } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private baseUrl = environment.services.products + '/products';

  getAll(pageRequest?: PageRequest): Observable<PaginatedResponse<Product>> {
    let params = new HttpParams();
    if (pageRequest) {
      params = params.set('page', pageRequest.page.toString());
      params = params.set('size', pageRequest.size.toString());
      if (pageRequest.sort) {
        params = params.set('sort', pageRequest.sort);
        params = params.set('direction', pageRequest.direction || 'ASC');
      }
    }
    return this.http.get<PaginatedResponse<Product>>(this.baseUrl, { params });
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  getByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/category/${category}`);
  }

  getLowStock(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/low-stock`);
  }

  create(product: Product): Observable<ApiResponse<Product>> {
    return this.http.post<ApiResponse<Product>>(this.baseUrl, product);
  }

  update(id: number, product: Product): Observable<ApiResponse<Product>> {
    return this.http.put<ApiResponse<Product>>(`${this.baseUrl}/${id}`, product);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }

  updateStock(id: number, quantity: number): Observable<ApiResponse<Product>> {
    return this.http.patch<ApiResponse<Product>>(`${this.baseUrl}/${id}/stock`, { quantity });
  }
}
