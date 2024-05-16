import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { adminGuard, carroGuard, contactosGuard, invitadoGuard, usuarioGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';
import { privadoGuard } from './guards/privado.guard';
import { CarroComponent } from './pages/carro/carro.component';



export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [contactosGuard] },
    { path: 'nosotros', component: NosotrosComponent, canActivate: [contactosGuard] },
    { path: 'productos', component: ProductosComponent, canActivate: [contactosGuard] },
    { path: 'contactos', component: ContactosComponent, canActivate: [contactosGuard] },
    { path: 'login', component: LoginComponent, canActivate: [privadoGuard] },
    { path: 'carro', component: CarroComponent, canActivate: [carroGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
  ];