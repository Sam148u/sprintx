import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ShopdetailComponent } from './shopdetail/shopdetail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ParkourComponent } from './parkour/parkour.component';
import { NatacionComponent } from './natacion/natacion.component';
import { TenisComponent } from './tenis/tenis.component';
import { BeisbolComponent } from './beisbol/beisbol.component';
import { FutbolComponent } from './futbol/futbol.component';
import { CartGuard } from './guard/cart.guard';
import { LoginGuard } from './guard/login.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ProductListComponent },
  { path: 'detail/:id', component: DetailComponent }, 
  { path: 'shopdetail', component: ShopdetailComponent }, // localhost:4200/detail
  { path: 'ShoppingCart', component: CartComponent, canActivate:[CartGuard] },
  { path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoginGuard]},
  { path: 'parkour', component: ParkourComponent },
  { path: 'natacion', component: NatacionComponent },
  { path: 'tenis', component: TenisComponent },
  { path: 'beisbol', component: BeisbolComponent },
  { path: 'futbol', component: FutbolComponent }
];

