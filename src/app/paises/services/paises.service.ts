import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
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
}
