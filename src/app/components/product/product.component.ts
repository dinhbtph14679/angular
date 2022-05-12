import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/productTyoe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  titile: string = "Product Page";
  isStatus: boolean = false;
  productName: string = "";
  productList: IProduct[] = [
    {id: 1,name: "Product a", price: 300, status: true},
    {id: 2,name: "Product b", price: 400, status: false},
    {id: 3,name: "Product c", price: 500, status: true},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  evenClick(){
    this.isStatus = !this.isStatus
  }
  deleteProduct(id: number){
    this.productList = this.productList.filter(product => product.id !== id)
  }

}
