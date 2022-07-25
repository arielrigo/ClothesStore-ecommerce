import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ClothesstoreAppComponent } from './components/clothesstore-app/clothesstore-app.component';
import { FiltersComponent } from './components/clothesstore-app/filters/filters.component';
import { ProductListComponent } from './components/clothesstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/clothesstore-app/product-list/product-item/product-item.component';
import { AppRoutingModule } from './app-routing.module';
import { BuyClothesComponent } from './components/clothesstore-app/product-list/product-item/buy-clothes/buy-clothes.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ClothesstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    BuyClothesComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
