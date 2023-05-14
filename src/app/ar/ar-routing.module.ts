import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArComponent } from '../ar/ar.component';
import { LocationBasedArComponent } from './location-based-ar/location-based-ar.component';

export const routes: Routes = [
  {
    path: '',
    component: ArComponent,
    children : [
      
        {
          path: 'location-based-ar',
           loadChildren: () => import('./location-based-ar/location-based-ar.module').then(m => m.LocationBasedArModule)
          //component : LocationBasedArComponent
        },
        {
          path: 'texture-ar',
           loadChildren: () => import('./texture-ar/texture-ar.module').then(m => m.TextureArModule)
          //component : LocationBasedArComponent
        },
        
        
    ]
  },
  {
    path:'',
    redirectTo : '/ar/location-based-ar',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArRoutingModule { }
