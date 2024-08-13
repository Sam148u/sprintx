import { Component, inject } from '@angular/core';
import { SchemaProductsComponent } from '../schema-products/schema-products.component';
import { ProductsService } from '../service/products.service';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SchemaProductsComponent, RouterLinkWithHref, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];
  private productsService = inject(ProductsService);
  private cartService = inject(CartService)

  // products = this.productsService.products; 
  ngOnInit(): void {
    this.productsService.productList().subscribe(data => {
      this.products = data;
    });
    
  }
  addToCart(product:any){
    console.log(product)
    this.cartService.addToCart(product)
  }
}
