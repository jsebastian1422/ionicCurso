import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'; // Importamos las rutas desde angualar
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

// Creacion de constante que almacena las rutas de la aplicacion especificando su paquete y componente
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { // En caso de que la ruta no existe redirecciona al home
    path: '**',
    redirectTo: 'home'
  }
];

/**
 * Se debe definir el sistema de rutas
 */
@NgModule({
  declarations: [],
  imports: [
    // Sistema de rutas principal
    RouterModule.forRoot(routes)
  ],
  // Exporta la configuracion del modulo
  exports: [ 
    RouterModule
  ]
})
export class AppRoutingModule { }
