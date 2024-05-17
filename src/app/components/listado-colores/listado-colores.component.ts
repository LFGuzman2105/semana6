import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Colores } from '../../models/colores';

@Component({
  selector: 'app-listado-colores',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listado-colores.component.html',
  styleUrl: './listado-colores.component.scss'
})
export class ListadoColoresComponent {
  rojo: number;
  verde: number;
  azul: number;
  colores: Array<Colores>;

  constructor(private router: Router) {
    this.rojo = 0;
    this.verde = 0;
    this.azul = 0;
    this.colores = [];
  }

  agregarColor() {
    if ((this.rojo >= 0 && this.rojo <= 255) && (this.verde >= 0 && this.verde <= 255) && (this.azul >= 0 && this.azul <= 255)) {
      var hexRojo = this.rojo.toString(16);
      var hexVerde = this.verde.toString(16);
      var hexAzul = this.azul.toString(16);

      if (hexRojo == "0") {
        hexRojo = '00';
      }

      if (hexVerde == "0") {
        hexVerde = '00';
      }

      if (hexAzul == "0") {
        hexAzul = '00';
      }

      this.colores.push(new Colores(('#' + hexRojo + hexVerde + hexAzul).toUpperCase()));
    }
    else {
      alert('El valor del color debe estar entre 0 y 255');
    }
  }
}