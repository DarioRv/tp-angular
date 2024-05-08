import { Routes } from '@angular/router';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'productos', component: Punto1Component },
      { path: 'juego', component: Punto2Component },
      { path: '**', redirectTo: 'productos', pathMatch: 'full' },
    ],
  },
];
