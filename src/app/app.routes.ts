import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'ar',
    loadChildren: () => import('./ar/ar-routing.module').then((m) => m.ArRoutingModule),
  },
  {
    path: 'ar-store',
    loadComponent: () => import('./ar-store/ar-list.page').then( m => m.ArListPage)
  },
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then( m => m.EmailModule)
  },
];
