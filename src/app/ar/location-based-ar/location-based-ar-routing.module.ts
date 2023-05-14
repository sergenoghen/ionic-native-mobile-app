import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArComponent } from '../ar.component';
import { LocationBasedArComponent } from './location-based-ar.component';

const routes: Routes = [
  {
    path: '',
    component: LocationBasedArComponent,
    children : [
      
        {
          path: 'location-based-ar',
          // loadChildren: () => import('../location-based-ar/location-based-ar.module').then(m => m.LocationBasedArModule)
          component : LocationBasedArComponent
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationBasedArRoutingModule { }
