import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    // Rutas
    { path: '', component: HomeComponent },
    { path: '404', component: Error404Component },


    // Ruta de redirección para cualquier otra URL no definida
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
