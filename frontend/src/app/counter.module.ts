import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterComponent } from './counter.component';
import { counterReducer } from './counter/counter.reducer';
import { CounterEffects } from './counter/counter.effects';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('count', counterReducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  exports: [CounterComponent]
})
export class CounterModule { }