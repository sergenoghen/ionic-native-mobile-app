import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArRoutingModule } from './ar-routing.module';
import { IonicModule } from '@ionic/angular';
import { ArComponent } from './ar.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ArRoutingModule
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class ArModule { }
