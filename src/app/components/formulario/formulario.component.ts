import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/Ticket.class';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  modo: 'editar' | 'crear' = 'crear';
  ticket: Ticket = new Ticket();

  constructor(
    private ticketService: TicketService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({ id }) => {
      if (id) {
        let ticket = this.ticketService.tickets.find(
          (t) => t.id === parseInt(id)
        );
        if (ticket) {
          this.ticket = ticket;
          this.modo = 'editar';
        }
      }
    });
  }

  onSubmit(): void {
    if (this.modo === 'crear') {
      this.agregarTicket();
    } else {
      this.editarTicket();
    }
  }

  editarTicket(): void {
    this.ticketService.editarTicket(this.ticket);
    this.ticket = new Ticket();
  }

  agregarTicket(): void {
    this.calcularPrecioCobrado();
    this.ticketService.agregarTicket(this.ticket);
    this.ticket = new Ticket();
  }

  calcularPrecioCobrado(): void {
    if (this.ticket.tipoEspectador !== 'l') {
      this.ticket.precioCobrado = this.ticket.precioReal;
      return;
    }

    this.ticket.precioCobrado =
      this.ticket.precioReal - this.ticket.precioReal * 0.2;
  }
}
