import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AddProductComponent } from './components/add-product/add-product.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AboutComponent,
    ProductComponent,
    ProductDetailComponent,
    AdminLayoutComponent,
    NotFoundPageComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
