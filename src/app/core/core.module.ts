import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app/app.component';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './reducers/app.reducer';
import { StoreModule } from '@ngrx/store';
import { CoreEffects } from './effects/core.effects';
import { MapModule } from '../features/map/map.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([CoreEffects]),
    MapModule
  ],
  declarations: [AppComponent],
  exports: [AppComponent]
})
export class CoreModule { }
