import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { ProductsService } from '../../service/products.service';
import { loadProducts, loadProductsSuccess } from './actions';

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(loadProducts),
    exhaustMap(() => this.productsService.productList()
      .pipe(
        map((products) => loadProductsSuccess({ payload: products })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
  ) {}
}