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
  private apiUrl = 'https://localhost:7009/api/products';

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

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // retrieveData(): Product[] {
  // const storedData = localStorage.getItem(this.key);
  // let data = storedData ? JSON.parse(storedData) : [];
  // if (data.length === 0) {
  //   data = [
  //     {
  //       group: 'vegetable',
  //       name: 'dummy1',
  //       type: 'exotic',
  //       quantity: 100,
  //       price: 100,
  //     },
  //     {
  //       group: 'fruit',
  //       name: 'dummy2',
  //       type: 'regular',
  //       quantity: 100,
  //       price: 100,
  //     },
  //   ];
  // }
  // return data;
  // }

  // storeData(data: Product[]): void {
  //   localStorage.setItem(this.key, JSON.stringify(data));
  // }
}
