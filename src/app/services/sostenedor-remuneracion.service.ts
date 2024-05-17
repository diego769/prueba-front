import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SostenedorRemuneracion } from '../Models/SostenedorRemuneracion';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SostenedorRemuneracionService {

  private BASEURL = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  obtenerDatos(rutSostenedor: string): Observable<SostenedorRemuneracion> {
    let url = `${this.BASEURL}/obtener-sostenedor`;

    const data = {
      rutSostenedor: rutSostenedor
    }

    return this.http.post<SostenedorRemuneracion>(url, data).pipe(
      map(value => {
        return value;
      })
    );
  }
}
