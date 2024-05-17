import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListadoColoresComponent } from './components/listado-colores/listado-colores.component';

export const routes: Routes = [
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'listado-colores', component: ListadoColoresComponent},
    { path: '', redirectTo: '/calculadora', pathMatch: 'full' }
];