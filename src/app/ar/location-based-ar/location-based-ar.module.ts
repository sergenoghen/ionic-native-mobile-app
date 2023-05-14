//https://ar-js-org.github.io/AR.js-Docs/location-based/

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationBasedArRoutingModule } from './location-based-ar-routing.module';
import { IonicModule } from '@ionic/angular';
import { LocationBasedArComponent } from './location-based-ar.component';


@NgModule({
  declarations: [
    LocationBasedArComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    LocationBasedArRoutingModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class LocationBasedArModule { }
