import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  group: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  key = 'productData';
  private apiUrl = 'https://vegetable-shop-app.onrender.com/api/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  update(product: Product, id: number): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, { ...product, id });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
