import { Component, inject } from '@angular/core';
import { SchemaProductsComponent } from '../schema-products/schema-products.component';
import { ProductsService } from '../service/products.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SchemaProductsComponent, RouterLinkWithHref],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  private productsService = inject(ProductsService);

  products = this.productsService.products;
}
