import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = signal(new Map())

  addToCart(product: any){

    console.log("agregaremos al carrito un producto")

    this.products.update((mapViejo: any) =>{
      mapViejo.set(product._id, product)
      return new Map(mapViejo)
    })
  }
  constructor() { }
}
