import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumComponent } from './container/cesium/cesium.component';
import { RegisterFeature } from './actions/map.actions';
import { Store } from '@ngrx/store';
import { IMapState } from './reducers/map.reducer';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CesiumComponent]
})
export class MapModule {
  constructor(public store: Store<IMapState>) {

    this.store.dispatch(new RegisterFeature({
      name: 'map', component: CesiumComponent
    }));
  }
}
