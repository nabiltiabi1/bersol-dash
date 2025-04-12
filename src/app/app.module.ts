import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { CategoriesService } from './categories.service';
import { ProductService } from './product.service';
import { ReceiptService } from './receipt.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
		ReceiptListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService, ReceiptService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
