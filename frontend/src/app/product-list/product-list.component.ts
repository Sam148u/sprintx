import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';
import { RouterLinkWithHref } from '@angular/router';

import { SchemaProductsComponent } from '../schema-products/schema-products.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProducts } from './state/actions';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    SchemaProductsComponent,
    RouterLinkWithHref,
    CommonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products$!: Observable<any[]>;
  private cartService = inject(CartService)

  constructor(private store: Store<{ products: any[] }>) { }

  ngOnInit(): void {
    this.loadProducts();
    this.products$ = this.store.select('products');
    
  }
  loadProducts(): void {
    this.store.dispatch(loadProducts());
  }

  addToCart(product: any) {
    this.cartService.addToCart(product)
  }
}
