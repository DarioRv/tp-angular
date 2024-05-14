import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DetallesJuego {
  iteracion: number;
  aciertos: number;
  errores: number;
  modo: string;
  palabra: string;
  opciones: number[];
  opcionCorrecta: number;
}

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css',
})
export class Punto2Component {
  palabras = [
    'gato',
    'susurrar',
    'comida',
    'arbol',
    'mariposa',
    'luz',
    'papel',
    'caramelo',
    'suspiro',
    'mesa',
    'silla',
  ];

  estado: 'inicio' | 'jugando' | 'finalizado' = 'inicio';

  juegoActual: DetallesJuego = {
    iteracion: 0,
    aciertos: 0,
    errores: 0,
    modo: '',
    palabra: '',
    opciones: [],
    opcionCorrecta: 0,
  };

  constructor() {}

  /**
   * Inicia un nuevo juego con el modo seleccionado y una palabra aleatoria
   * @param modo Modo de juego seleccionado
   */
  iniciarJuego(modo: 'vocales' | 'consonantes' | 'letras' | 'silabas') {
    this.estado = 'jugando';
    this.juegoActual.modo = modo;
    this.juegoActual.palabra =
      this.palabras[this.obtenerNumeroAleatorio(0, 10)];
    this.juegoActual.iteracion = 0;
    this.juegoActual.aciertos = 0;
    this.juegoActual.errores = 0;
    this.juegoActual.opciones = this.generarOpciones();
    this.juegoActual.opcionCorrecta = this.obtenerOpcionCorrecta(
      this.juegoActual.palabra,
      modo
    );
  }

  /**
   * Finaliza el juego actual, cambiando el estado a 'finalizado'.
   */
  finalizarJuego() {
    this.estado = 'finalizado';
  }

  /**
   * Reinicia el juego actual, manteniendo el modo seleccionado
   * previamente y reiniciando las estadísticas.
   */
  reiniciarJuego() {
    this.estado = 'jugando';
    const modoAnterior = this.juegoActual.modo;
    this.juegoActual.modo = modoAnterior;
    this.juegoActual.iteracion = 0;
    this.juegoActual.aciertos = 0;
    this.juegoActual.errores = 0;
    this.juegoActual.palabra = '';
    this.juegoActual.opciones = [];
    this.juegoActual.opcionCorrecta = 0;
  }

  /**
   * Cambia el estado del juego a 'inicio'.
   */
  irAInicio() {
    this.estado = 'inicio';
  }

  /**
   * Avanza a la siguiente iteración del juego actual y actualiza
   * la palabra y las opciones a mostrar.
   */
  avanzarIteracion(): void {
    if (this.juegoActual.iteracion == 7) {
      this.finalizarJuego();
      return;
    }
    this.juegoActual.iteracion += 1;
    this.juegoActual.palabra =
      this.palabras[this.obtenerNumeroAleatorio(0, 10)];
    this.juegoActual.opciones = this.generarOpciones();
    this.juegoActual.opcionCorrecta = this.obtenerOpcionCorrecta(
      this.juegoActual.palabra,
      this.juegoActual.modo
    );
  }

  /**
   * Valida la opción seleccionada por el usuario y actualiza las estadísticas
   * del juego actual en caso de acierto o error.
   * Si la opción seleccionada es correcta, avanza a la siguiente iteración.
   * @param opcion
   */
  validarOpcion(opcion: number) {
    if (opcion == this.juegoActual.opcionCorrecta) {
      this.juegoActual.aciertos += 1;
      this.avanzarIteracion();
    } else {
      this.juegoActual.errores += 1;
    }
  }

  /**
   * Genera un numero aleatorio dentro de un rango.
   * @param min valor mínimo del rango
   * @param max valor máximo del rango
   * @returns numero aleatorio generado
   */
  obtenerNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Genera los opciones para la iteración actual.
   * @returns
   */
  generarOpciones(): number[] {
    const opciones: number[] = [];
    // agregar opcion correcta
    opciones.push(
      this.obtenerOpcionCorrecta(
        this.juegoActual.palabra,
        this.juegoActual.modo
      )
    );
    // generar opciones incorrectas
    for (let i = 0; i < 3; i++) {
      let opcionIncorrecta = this.obtenerNumeroAleatorio(1, 5);
      while (opciones.includes(opcionIncorrecta)) {
        opcionIncorrecta = this.obtenerNumeroAleatorio(1, 5);
      }
      opciones.push(opcionIncorrecta);
    }
    // mezclar opciones
    opciones.sort(() => Math.random() - 0.5);
    return opciones;
  }

  /**
   * Obtiene la opción correcta según el modo de juego
   * @param palabra palabra
   * @param modo modo de juego
   * @returns opción correcta
   */
  obtenerOpcionCorrecta(palabra: string, modo: string): number {
    switch (modo) {
      case 'vocales':
        return this.obtenerNumeroVocales(palabra);
      case 'consonantes':
        return this.obtenerNumeroConsonantes(palabra);
      case 'letras':
        return this.obtenerNumeroLetras(palabra);
      case 'silabas':
        return this.obtenerNumeroSilabas(palabra);
      default:
        return 0;
    }
  }

  /**
   * Obtiene el número de vocales en una palabra
   * @param palabra palabra
   * @returns número de vocales
   */
  obtenerNumeroVocales(palabra: string): number {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let numeroVocales = 0;
    for (let i = 0; i < palabra.length; i++) {
      if (vocales.includes(palabra[i])) {
        numeroVocales += 1;
      }
    }

    return numeroVocales;
  }

  /**
   * Obtiene el número de consonantes en una palabra
   * @param palabra palabra
   * @returns número de consonantes
   */
  obtenerNumeroConsonantes(palabra: string): number {
    const consonantes = [
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'm',
      'n',
      'ñ',
      'p',
      'q',
      'r',
      's',
      't',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    let numeroConsonantes = 0;
    for (let i = 0; i < palabra.length; i++) {
      if (consonantes.includes(palabra[i])) {
        numeroConsonantes += 1;
      }
    }

    return numeroConsonantes;
  }

  /**
   * Obtiene el número de letras en una palabra
   * @param palabra palabra
   * @returns número de letras
   */
  obtenerNumeroLetras(palabra: string): number {
    return palabra.length;
  }

  /**
   * Obtiene el número de sílabas en una palabra
   * @param palabra palabra
   * @returns número de sílabas
   */
  obtenerNumeroSilabas(palabra: string): number {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let numeroSilabas = 0;
    for (let i = 0; i < palabra.length; i++) {
      if (vocales.includes(palabra[i])) {
        numeroSilabas += 1;
      }
    }

    return numeroSilabas;
  }
}
