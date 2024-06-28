import { Component, inject, signal } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';
import { CartComponent } from '../pages/cart/cart.component';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule, CartComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{
  private router = inject(Router)
  private userService = inject(UserService)
  private cartService = inject(CartService)

  cart = this.cartService.products
  total = this.cartService.total;
  showCart = signal(false)

  toggleCartVisibility() {
    this.showCart.update(prevState => !prevState)
  }

  isLogged() {
    return this.userService.isLogged()
  }

  logout() {
    this.userService.removeToken()
    this.router.navigate(["/login"])
  }
}
