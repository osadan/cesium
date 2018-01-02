import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app/app.component';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './reducers/app.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([])
  ],
  declarations: [AppComponent],
  exports: [AppComponent]
})
export class CoreModule { }
