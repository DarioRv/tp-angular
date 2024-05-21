import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { IPInfoResponse } from '../interfaces/ip-info-response.interface';
import { Address, AddressInfoResponse } from '../interfaces/address-info-response.interface';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {

  constructor(private http: HttpClient) { }

  getInfoFromIp(ip: string): Observable<IPInfoResponse> {
    const url = "https://community-neutrino-ip-info.p.rapidapi.com/ip-info";

    const headers = {
      'x-rapidapi-key': 'd5958d7e67mshed5cdfa08c6a56bp14686bjsn051dc6ddbe7a',
      'x-rapidapi-host': 'community-neutrino-ip-info.p.rapidapi.com',
      'Content-Type': 'application/json'
    };

    const params = {
      ip,
      'reverse-lookup': 'checked'
    }

    return this.http.post<IPInfoResponse>(url, params,{ headers });

    //return of({"region-code":"Y","country":"Argentina","country-code":"AR","city":"San Salvador de Jujuy","timezone":{"date":"2024-05-21","offset":"-03:00","name":"Argentina Standard Time","id":"America/Argentina/Jujuy","time":"19:20:22.770227","abbr":"ART"},"ip":"200.106.249.7","latitude":-24.19444,"valid":true,"is-v4-mapped":false,"hostname":"","continent-code":"SA","host-domain":"","currency-code":"ARS","region":"Jujuy","is-bogon":false,"country-code3":"ARG","is-v6":false,"longitude":-65.29756}).pipe(delay(2000));
  }

  getAddressFromLatLng(lat: number, lng: number): Observable<Address> {
    const url = 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi';

    const headers = {
      'x-rapidapi-key': 'd5958d7e67mshed5cdfa08c6a56bp14686bjsn051dc6ddbe7a',
      'x-rapidapi-host': 'address-from-to-latitude-longitude.p.rapidapi.com'
    }

    const params = {
      lat, lng
    }

    return this.http.get<AddressInfoResponse>(url, {headers, params}).pipe(
      map((resp) => resp.Results[0])
    );
  }
}
