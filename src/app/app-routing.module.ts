import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path: "home",  component: AboutComponent,pathMatch: "full"},
  {path: "product", component: ProductComponent},
  {path: "product/add",component: AddProductComponent},
  {path: "product/:id", component: ProductDetailComponent},
  {path: "product/edit/:id",component: AddProductComponent},
  {path: "admin", component: AdminLayoutComponent},
  {path: "**", component: NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
