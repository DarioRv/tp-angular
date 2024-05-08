import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
}

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css',
})
export class Punto1Component {
  productos: Producto[] = [
    {
      nombre: 'Computadora portátil Dell XPS 13 Plus',
      descripcion:
        'Laptop ultradelgada con procesador Intel Core i7, pantalla OLED de 13.4 pulgadas y duración de batería de hasta 12 horas.',
      img: 'https://m.media-amazon.com/images/I/710EGJBdIML._AC_SL1500_.jpg',
      precio: 2499.0,
    },
    {
      nombre: 'Smartphone Samsung Galaxy S23 Ultra',
      descripcion:
        'Teléfono inteligente con cámara de 200MP, pantalla AMOLED de 6.8 pulgadas y procesador Snapdragon 8 Gen 2.',
      img: 'https://multipoint.com.ar/Image/0/750_750-[global-version]-sm-s918_galaxys23ultra_front_phantomblack_221122.jpg',
      precio: 1599.0,
    },
    {
      nombre: 'Tablet Apple iPad Air (5.ª generación)',
      descripcion:
        'Tablet con chip M1, pantalla Liquid Retina de 10.9 pulgadas y soporte para Apple Pencil.',
      img: 'https://http2.mlstatic.com/D_NQ_NP_816106-MLU69497704515_052023-O.webp',
      precio: 699.0,
    },
    {
      nombre: 'Monitor curvo Samsung Odyssey G9',
      descripcion:
        'Monitor curvo de 49 pulgadas con resolución Super Ultrawide Dual QHD (5120 x 1440) y frecuencia de actualización de 240Hz.',
      img: 'https://images.samsung.com/is/image/samsung/p6pim/es/lc49g95tsspxen/gallery/es-odyssey-g9-456864-lc49g95tsspxen-536132867?$650_519_PNG$',
      precio: 2199.0,
    },
    {
      nombre: 'Teclado mecánico Corsair K100 RGB OPX',
      descripcion:
        'Teclado mecánico con interruptores OPX Optical, retroiluminación RGB y reposamuñecas magnético.',
      img: 'https://http2.mlstatic.com/D_NQ_NP_843075-MLA45600350874_042021-O.webp',
      precio: 249.99,
    },
    {
      nombre: 'Mouse inalámbrico Logitech MX Master 3S',
      descripcion:
        'Mouse inalámbrico ergonómico con sensor de alta precisión, botones personalizables y hasta 90 días de autonomía de batería.',
      img: 'https://www.fullh4rd.com.ar/img/productos/14/mouse-wireless-logitech-mx-master-3s-gris-palido-910006562-0.jpg',
      precio: 149.99,
    },
    {
      nombre: 'Unidad de estado sólido Samsung 980 Pro',
      descripcion:
        'SSD NVMe PCIe 4.0 Gen 4 con hasta 7,000 MB/s de lectura y 5,100 MB/s de escritura.',
      img: 'https://images-cdn.ubuy.com.sa/634e6edd5969c17228685c98-samsung-980-pro-2tb-pcie-ssd-7-000-mbs.jpg',
      precio: 249.99,
    },
    {
      nombre: 'Tarjeta gráfica NVIDIA GeForce RTX 3080 Ti',
      descripcion:
        'Tarjeta gráfica con 12GB de memoria GDDR6X y arquitectura Ampere.',
      img: 'https://front.dev.malditohard.com.ar/img/migration/PLACA-DE-VIDEO-RTX-3080-TI-EVGA-FTW3-ULTRA-GAMING.webp',
      precio: 1199.0,
    },
    {
      nombre: 'Auriculares para juegos HyperX Cloud Alpha',
      descripcion:
        'Auriculares para juegos con controladores de 50 mm, micrófono desmontable y diseño cómodo.',
      img: 'https://row.hyperx.com/cdn/shop/products/hyperx_cloud_alpha_wireless_1_main.jpg?v=1662449707',
      precio: 99.99,
    },
  ];

  carrito: Producto[] = [];

  constructor() {}

  /**
   * Agrega un producto al carrito.
   * @param producto Producto a agregar al carrito.
   */
  agregarCarrito(producto: Producto): void {
    this.carrito.push(producto);
  }

  /**
   * Calcula el total de los productos en el carrito.
   * @returns Total de los productos en el carrito.
   */
  calcularTotal(): number {
    let total = 0;
    this.carrito.forEach((producto) => {
      total += producto.precio;
    });

    return total;
  }
}
