import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { BuyClothesComponent } from './components/clothesstore-app/product-list/product-item/buy-clothes/buy-clothes.component';
import { ClothesstoreAppComponent } from './components/clothesstore-app/clothesstore-app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '', component: ClothesstoreAppComponent
  },
  {
    path: 'buy-clothes', component: BuyClothesComponent
  },
  {
    path: 'sign-up', component: SignUpComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
