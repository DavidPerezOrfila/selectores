import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {

  private baseUrl = 'https://restcountries.eu/rest/v2'

  private _regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europa',
    'Oceania',
  ];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) {
  }
  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {
    const url: string = `${this.baseUrl}/region/${region}?fields=alpha3Code;name;`
    return this.http.get<PaisSmall[]>(url)
  }
}
