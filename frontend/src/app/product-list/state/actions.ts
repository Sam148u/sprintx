import { createAction, props } from "@ngrx/store";

export const loadProducts = createAction('[Products Page] Load Products');
export const loadProductsSuccess = createAction(
    '[Products Page] Load Products Success',
    props<{ payload: any[] }>()
);