import { Injectable } from '@angular/core';
import data from '../data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProduct(id: any){
    return data.find(item => item.id == id)

  }
  getProductlist(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
  deleteProduct(){

  }
  updateProduct(){

  }
  addProduct(){

  }
}
