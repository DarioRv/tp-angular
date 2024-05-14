export class Ticket {
  id: number;
  dni: string;
  precioReal: number;
  tipoEspectador: string;
  fecha: Date;
  precioCobrado: number;

  constructor(
    id?: number,
    dniUsuario?: string,
    precioReal?: number,
    tipoEspectador?: string,
    fecha?: Date,
    precioCobrado?: number
  ) {
    this.id = id || new Date().getTime();
    this.dni = dniUsuario || '';
    this.precioReal = precioReal || 0;
    this.tipoEspectador = tipoEspectador || 'na';
    this.fecha = fecha || new Date();
    this.precioCobrado = precioCobrado || 0;
  }
}
