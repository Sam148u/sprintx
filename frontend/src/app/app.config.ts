import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { routes } from './app.routes';

import { EffectsModule } from '@ngrx/effects';

import { ProductsEffects } from './product-list/state/effect';
import { ProductsReducer } from './product-list/state/reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),provideHttpClient(),
    importProvidersFrom(
      StoreModule.forRoot({
        products: ProductsReducer
      }),
      EffectsModule.forRoot(ProductsEffects),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        autoPause: true,
        trace: false,
        traceLimit: 75,
        connectInZone: true
      }),
    ),
  ]
};
