import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Publicaciones'
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        loadComponent: () => import('./publications.component').then(m => m.PublicationsComponent),
        data: {
          title: ''
        }
      },
      {
        path: 'create/:id',
        loadComponent: () => import('../customer-publication/customer-publication.component').then(m => m.CustomerPublicationComponent),
        data: {
          title: 'Cotizar'
        }
      }
    ]
  }
];


