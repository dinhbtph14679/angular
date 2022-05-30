import { Component, OnInit } from '@angular/core';
import data from 'src/app/data';
import { IProduct } from 'src/app/models/productTyoe';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productList!: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProductlist().subscribe((data) => {
      this.productList = data;
    });
  }
  onHandleRemove(id: number){
    this.productService.deleteProduct(id).subscribe(() => {
      this.productList = this.productList.filter(item => item.id !== id)
    })
  }
}
