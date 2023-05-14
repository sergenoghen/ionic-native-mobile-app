import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './email.routes';
import {  ReactiveFormsModule  } from "@angular/forms";



@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class EmailRoutingModuleModule { }
