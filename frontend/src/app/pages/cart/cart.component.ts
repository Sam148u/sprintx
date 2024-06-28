import { Component, Input, inject, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private cartService = inject(CartService)
  @Input() product: any;

  productQuantity = new FormControl(0);

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      this.productQuantity.setValue(this.product.quantity)
    }
  }

  increment(productId: string) {
    this.cartService.incrementQuantity(productId)
  }

  decrement(productId: string) {
    this.cartService.decrementQuantity(productId)
  }
  
  delete(productId: string) {
    this.cartService.deleteProduct(productId)
  }

}
