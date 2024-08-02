import { Injectable, signal, inject } from '@angular/core';
import { Product } from '../model/products';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient)
  
  productList(name?: string, price?: string): Observable<any>{
    let params = new HttpParams();

    if (name) {
      params = params.append('name', name);
    }

    if (price) {
      params = params.append('price', price);
    }
    return this.http.get("http://18.217.23.211:3000/articulos",
      {
        params
      }
    )
  }
  constructor() { }
  
  getOneProductById(id: string) {
    return this.http.get("http://18.217.23.211:3000/api/articulos/" + id)
    
  }
}

