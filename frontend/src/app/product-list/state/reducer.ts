import { createReducer, on } from '@ngrx/store';
import { loadProductsSuccess } from './actions';

export const initialState: any = [];

export const ProductsReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (_, props) => props.payload),
);