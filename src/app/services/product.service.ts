import { Injectable } from '@angular/core';
import data from '../data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/productTyoe';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = "http://localhost:3000/products"

  constructor(private http : HttpClient) { }

  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
  getProductlist(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.API_URL}`)
  }
  deleteProduct(id: number): Observable<IProduct>{
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
  updateProduct(product: IProduct){
    return this.http.put<IProduct>(`${this.API_URL}/${product.id}`,product)
  }
  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`${this.API_URL}`, product)
  }
}
