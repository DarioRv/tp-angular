import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    { label: 'Punto 1', routerLink: 'productos' },
    { label: 'Punto 2', routerLink: 'juego' },
    { label: 'Formulario', routerLink: 'formulario' },
    { label: 'Listado', routerLink: 'listado' },
  ];
}
