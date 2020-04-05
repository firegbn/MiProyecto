// imports Necesarios
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// IMPORTAR COMPONENTES
import {LoginComponent} from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

// definir rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'incio', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    // cuando no existe nombre de ruta se usa **
    {path: '**', component: ErrorComponent}

];
// exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



