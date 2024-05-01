import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckComponent } from './components/check/check.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'Cart', component: CartPageComponent},
  {path:"check", component: CheckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
