import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextureArRoutingModule } from './texture-ar-routing.module';
import { IonicModule } from '@ionic/angular';
import { TextureArComponent } from './texture-ar.component';


@NgModule({
  declarations: [
    TextureArComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    TextureArRoutingModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA,
  ]
})
export class TextureArModule { }
