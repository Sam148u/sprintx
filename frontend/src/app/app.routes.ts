import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ShopdetailComponent } from './shopdetail/shopdetail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ProductListComponent },
  { path: 'detail/:id', component: DetailComponent }, 
  { path: 'shopdetail', component: ShopdetailComponent }, // localhost:4200/detail
  { path: 'ShoppingCart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

