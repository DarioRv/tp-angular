import { Routes } from '@angular/router';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'productos',
        component: Punto1Component,
        title: 'Productos',
      },
      {
        path: 'juego',
        component: Punto2Component,
        title: 'Juego',
      },
      {
        path: 'formulario',
        component: FormularioComponent,
        title: 'Fomulario ticket',
      },
      {
        path: 'formulario/:id',
        component: FormularioComponent,
        title: 'Fomulario ticket',
      },
      {
        path: 'listado',
        component: ListadoComponent,
        title: 'Listado de tickets',
      },
      { path: '**', redirectTo: 'productos', pathMatch: 'full' },
    ],
  },
];
