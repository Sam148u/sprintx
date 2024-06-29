import { Component, inject } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  private cartService = inject(CartService)
  private router = inject(Router)

  products = this.cartService.products

  paymentDetails = new FormGroup({
    name: new FormControl(""),
    address: new FormControl(""),
    NumberCard: new FormControl(""),
    paymentMethod: new FormControl("")
  })

  onSubmit() {
    if(this.products().size >= 1 && this.paymentDetails.valid) {
      this.cartService.createOrder(this.paymentDetails.value)
      .subscribe({
        next: () => this.router.navigate(["/thanks"])
      })
    }
  }
}
