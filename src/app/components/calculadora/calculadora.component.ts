import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  operando1: number;
  operando2: number;
  resultado: string;

  constructor(private router: Router) {
    this.operando1 = 0;
    this.operando2 = 0;
    this.resultado = "";
  }

  sumar() {
    this.resultado = "" + (this.operando1 + this.operando2);
  }

  restar() {
    this.resultado = "" + (this.operando1 - this.operando2);
  }

  multiplicar() {
    this.resultado = "" + (this.operando1 * this.operando2);
  }

  dividir() {
    if (this.operando2 != 0) {
      this.resultado = "" + (this.operando1 / this.operando2);
    }
    else {
      alert("No es posible division entre 0.");
      this.resultado = "";
    };
  }

  potencia() {
    this.resultado = "" + Math.pow(this.operando1, this.operando2);
  }
}