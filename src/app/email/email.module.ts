import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { IonicModule } from '@ionic/angular';
import { EmailRoutingModuleModule } from './email-routing-module.module';
import {  ReactiveFormsModule  } from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EmailRoutingModuleModule,
    ReactiveFormsModule ,
  ]
})
export class EmailModule { }
