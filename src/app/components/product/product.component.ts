import { Component, OnInit } from '@angular/core';
import data from 'src/app/data';
import { IProduct } from 'src/app/models/productTyoe';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList!: IProduct[]

  constructor(private productService: ProductService) {
      this.productService.getProductlist().subscribe(data => {
        console.log(data);
      })

   }

  ngOnInit(): void {
  }



}
