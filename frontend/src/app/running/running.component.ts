interface articulos {
  _id: number;
  name: string;
  price:number;
  imageUrl: string;
  talla: number;
  descripción: string;
  
}

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { CartService } from '../service/cart.service';
import { inject } from '@angular/core';
import { ProductsService } from '../service/products.service';


@Component({
  selector: 'app-running',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.css']
})
   
export class RunningComponent implements OnInit {
  runningItems: articulos[] = []; 
  articulos: any;
  private productsService = inject(ProductsService);
  private cartService = inject(CartService)

  // products = this.productsService.products; 
  ngOnInit(): void {
    this.productsService.productList().subscribe((data: any) => {
      this.articulos = data;
    });
    
  }
  addToCart(product:any){
    console.log(product)
    this.cartService.addToCart(product)
  }
}

