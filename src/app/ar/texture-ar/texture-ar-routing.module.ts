import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArComponent } from '../ar.component';
import { TextureArComponent } from './texture-ar.component';

const routes: Routes = [
  {
    path: '',
    component: TextureArComponent,
    children : [
      
        {
          path: 'texture-ar',
          // loadChildren: () => import('../location-based-ar/location-based-ar.module').then(m => m.TextureArModule)
          component : TextureArComponent
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextureArRoutingModule { }
