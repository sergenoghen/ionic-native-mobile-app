import { Routes } from '@angular/router';
import { EmailComponent } from './email.component';

export const routes: Routes = [
  {
    path: '',
    component: EmailComponent,
    children: [
      {
        path: 'send',
        loadComponent: () =>
          import('./send-email/send-email.component').then((m) => m.SendEmailComponent),
      },
      
      {
        path: 'transfert',
        loadComponent: () =>
          import('./send-email/send-email.component').then((m) => m.SendEmailComponent),
      },
      {
        path: 'reply',
        loadComponent: () =>
          import('./send-email/send-email.component').then((m) => m.SendEmailComponent),
      },
      {
        path: '',
        redirectTo: '/email/send',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];
