import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SostenedorRemuneracion } from 'src/app/Models/SostenedorRemuneracion';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  sostenedor!: SostenedorRemuneracion;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.asignarDatos();
  }

  private asignarDatos() {
    this.sostenedor = JSON.parse(localStorage.getItem('sostenedor')!);
  }

  volver() {
    this.router.navigate(['']);
  }

}
