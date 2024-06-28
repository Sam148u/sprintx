import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = signal(new Map())

  total = computed(() => {
    const productsMap = this.products();
    let total = 0;

    productsMap.forEach(product => {
      total += product.price * product.quantity;
    });

    return total;
  });

  addToCart(product: any) {
    this.products.update((mapActual: any) => {
      const productInCart = mapActual.get(product._id)
      if (productInCart !== undefined) {
        // El producto ya existe
        mapActual.set(product._id, { ...productInCart, quantity: productInCart.quantity + 1 })
      } else {
        // El producto no existe
        mapActual.set(product._id, { ...product, quantity: 1 })
      }
      console.log(mapActual)
      return new Map(mapActual)
    })
  }

  incrementQuantity(productId: string) {
    this.products.update(mapActual => {

      const productInCart = mapActual.get(productId)
      if (productInCart !== undefined) {
        mapActual.set(productId, { ...productInCart, quantity: productInCart.quantity + 1 })
      }

      return new Map(mapActual)
    })
  }

  decrementQuantity(productId: string) {
    this.products.update(mapActual => {
      const productInCart = mapActual.get(productId);

      if (productInCart.quantity === 1) {
        mapActual.delete(productId)
      } else {
        mapActual.set(productId, { ...productInCart, quantity: productInCart.quantity - 1 })
      }

      return new Map(mapActual)
    })
  }
  deleteProduct(productId: string) {
    this.products.update(productsMap => {
      productsMap.delete(productId);
      return new Map(productsMap)
    })
  }

  constructor() { }
}
