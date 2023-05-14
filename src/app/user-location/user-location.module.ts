import { NgModule, Pipe } from '@angular/core';

import { UserLocationRoutingModule } from './user-location-routing.module';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserLocationRoutingModule,
    IonicModule
    
  ]
})
export class UserLocationModule { }
