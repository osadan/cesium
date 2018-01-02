import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumComponent } from './container/cesium/cesium.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CesiumComponent]
})
export class MapModule { }
