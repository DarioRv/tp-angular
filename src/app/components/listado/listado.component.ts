import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/Ticket.class';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';
import { EspectadorPipe } from '../../pipes/espectador.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, EspectadorPipe, RouterModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent implements OnInit {
  tickets: Ticket[] = [];
  resumen = {
    totalEspectadoresLocal: 0,
    totalEspectadoresExtranjeros: 0,
    totalEspectadores: 0,
    totalLocal: 0,
    totalExtranjero: 0,
    totalRecaudado: 0,
  };

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.tickets = this.ticketService.tickets;
    this.generarResumen();
  }

  llenarBaseDeDatos(): void {
    this.ticketService.llenarBaseDeDatos();
    this.tickets = this.ticketService.tickets;
    this.generarResumen();
  }

  generarResumen() {
    this.resumen = {
      totalEspectadoresLocal: 0,
      totalEspectadoresExtranjeros: 0,
      totalEspectadores: 0,
      totalLocal: 0,
      totalExtranjero: 0,
      totalRecaudado: 0,
    };

    this.resumen.totalEspectadores = this.tickets.length;

    this.tickets.forEach(({ tipoEspectador, precioCobrado }) => {
      this.resumen.totalRecaudado += precioCobrado;
      if (tipoEspectador === 'e') {
        this.resumen.totalExtranjero += precioCobrado;
        this.resumen.totalEspectadoresExtranjeros += 1;
      } else {
        this.resumen.totalLocal += precioCobrado;
        this.resumen.totalEspectadoresLocal += 1;
      }
    });
  }
}
