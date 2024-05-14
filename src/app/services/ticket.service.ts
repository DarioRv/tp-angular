import { Injectable } from '@angular/core';
import { Ticket } from '../models/Ticket.class';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private _tickets: Ticket[] = [];
  private _seed: Ticket[] = [
    new Ticket(161132, '12345678A', 10, 'e', new Date(), 10),
    new Ticket(273138, '12345612C', 100, 'l', new Date(), 80),
    new Ticket(380967, '12345698Z', 10, 'l', new Date(), 8),
    new Ticket(412351, '12345678M', 150, 'e', new Date(), 150),
    new Ticket(538581, '12345612E', 500, 'l', new Date(), 400),
    new Ticket(675142, '12345698P', 10, 'l', new Date(), 8),
    new Ticket(797387, '12345678B', 200, 'e', new Date(), 200),
  ];

  constructor() {}

  /**
   * Getter de tickets
   */
  get tickets(): Ticket[] {
    return this._tickets;
  }

  /**
   * Agrega un ticket al array de tickets
   * @param ticket Ticket a agregar
   */
  agregarTicket(ticket: Ticket): void {
    this._tickets.push(ticket);
  }

  /**
   * Elimina un ticket del array de tickets
   * @param id ID del ticket a eliminar
   */
  eliminarTicket(id: number): void {
    this._tickets = this._tickets.filter((ticket) => ticket.id !== id);
  }

  /**
   * Edita un ticket del array de tickets
   * @param ticket Ticket a editar
   */
  editarTicket(ticket: Ticket): void {
    const index = this._tickets.findIndex((t) => t.id === ticket.id);
    this._tickets[index] = ticket;
  }

  /**
   * Rellena la base de datos con los tickets de ejemplos de la seed
   */
  llenarBaseDeDatos(): void {
    this._seed.forEach((ticket) => {
      this.agregarTicket(ticket);
    });
  }

  /**
   * Obtiene un ticket por su ID
   * @param id ID del ticket a obtener
   * @returns Ticket encontrado o un valor undefined si no se encuentra
   */
  obtenerTicketById(id: number): Ticket | undefined {
    return this._tickets.find((ticket) => ticket.id === id);
  }
}
