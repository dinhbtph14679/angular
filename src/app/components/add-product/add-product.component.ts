import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/productTyoe';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: IProduct = {
    name: '',
    price: 0,
    status: true,
  };

  constructor(
    private productServices: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.productServices.getProduct(id).subscribe((data) => {
        this.product = data;
      });
    }
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.productServices.updateProduct(this.product).subscribe((data) => {
        setTimeout(() => {
          this.router.navigateByUrl(`/product`);
        }, 2000);
      });
    }
    this.productServices.addProduct(this.product).subscribe((data) => {
      setTimeout(() => {
        this.router.navigateByUrl('product');
      },2000);
    });
  }
}
