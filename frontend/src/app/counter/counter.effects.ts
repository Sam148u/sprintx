import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { increment, decrement, reset } from './counter.actions';

@Injectable()
export class CounterEffects {

  constructor(
    private actions$: Actions
  ) {}

  // Ejemplo de efecto para incrementar
  increment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      mergeMap(() => {
        // Aquí puedes realizar operaciones asíncronas
        return of({ type: '[Counter] Increment Success' });
      })
    )
  );
}