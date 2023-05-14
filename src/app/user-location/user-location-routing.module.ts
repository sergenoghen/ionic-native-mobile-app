import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLocationComponent } from './user-location.component';

const routes: Routes = [
  {
    path : '',
    component: UserLocationComponent,
    children : [

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLocationRoutingModule { }
