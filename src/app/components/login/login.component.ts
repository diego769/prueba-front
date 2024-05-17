import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SostenedorRemuneracion } from 'src/app/Models/SostenedorRemuneracion';
import { SostenedorRemuneracionService } from 'src/app/services/sostenedor-remuneracion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ingresoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicioSostenedor: SostenedorRemuneracionService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.ingresoForm = this.fb.group({
      rutSostenedor: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.ingresoForm.valid) {
      this.consultarSostenedor();
    }
  }

  private consultarSostenedor() {
    this.servicioSostenedor.obtenerDatos(this.ingresoForm.value.rutSostenedor).subscribe({
      next: (value: SostenedorRemuneracion) => {
        localStorage.setItem('sostenedor', JSON.stringify(value));
        this.router.navigate(['/datos']);
      },
      error: (error) => {
        console.log(error);
        this._snackBar.open('El rut ingresado es invalido o ha ocurrido un error.', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }
}
