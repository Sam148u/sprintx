import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private http = inject(HttpClient)
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
  createOrder(formData: any) {
    console.log("Create order");
    console.log(formData)
    console.log(this.products().values())



    const mapToArray = Array.from(this.products().values())
    const productsArray = mapToArray.map(product => {
      return { product: product._id, quantity: product.quantity }
    })

    console.log(productsArray)

    
    return this.http.post(
      "http://3.15.230.254:3000/api/compras",
      {
        
        products: productsArray,
        total: this.total(),
        name: formData.name,
        address: formData.address,
        NumberCard: formData.NumberCard,
        paymentMethod: formData.paymentMethod
      },
      {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`,
          'Content-Type': 'application/json'
        })
      })
  }
  constructor() { }
}
