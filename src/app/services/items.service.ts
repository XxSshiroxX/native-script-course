import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getApiUrl } from '../config';
import { Observable } from 'rxjs';

export interface Item {
  id: number;
  nombre: string;
  descripcion: string;
  favorito: boolean;
}

@Injectable({ providedIn: 'root' })
export class ItemsService {
  constructor(private http: HttpClient) {}

  getItems(search: string = '', favorito?: boolean): Observable<Item[]> {
    let url = `${getApiUrl()}/items?`;
    if (search) url += `search=${encodeURIComponent(search)}&`;
    if (favorito !== undefined) url += `favorito=${favorito}`;
    return this.http.get<Item[]>(url);
  }

  addItem(nombre: string, descripcion: string = '', favorito: boolean = false): Observable<Item> {
    return this.http.post<Item>(`${getApiUrl()}/items`, { nombre, descripcion, favorito });
  }

  updateFavorito(id: number, favorito: boolean): Observable<Item> {
    return this.http.put<Item>(`${getApiUrl()}/items/${id}/favorito`, { favorito });
  }
}
