import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IpInfoService } from '../../services/ip-info.service';
import { IPInfoResponse } from '../../interfaces/ip-info-response.interface';
import { DatePipe } from '@angular/common';
import { Address, AddressInfoResponse } from '../../interfaces/address-info-response.interface';

@Component({
  selector: 'app-ip-info',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './ip-info.component.html',
  styleUrl: './ip-info.component.css'
})
export class IpInfoComponent {
  ip: string = '';
  ipInfo?: IPInfoResponse;
  addressInfo?: Address;

  constructor(private ipInfoService: IpInfoService) {}

  onSubmit(): void {
    if (this.ip.length == 0) {
      alert('Introduzca una IP');
      return;
    }
    console.log(this.ip);
    this.obtenerInfo(this.ip);
  }

  obtenerInfo(ip: string): void {
    this.ipInfoService.getInfoFromIp(ip).subscribe({
      next: (resp) => {
        console.log(resp);
        this.ipInfo = resp;
        this.obtenerDireccion(resp.latitude, resp.longitude);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  obtenerDireccion(lat: number, lng: number): void {
    this.ipInfoService.getAddressFromLatLng(lat, lng).subscribe({
      next: (res) => {
        console.log(res);
        this.addressInfo = res;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
