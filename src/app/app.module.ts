import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MenuScriptService } from './services/menu-script.service';
import { Comunicacion1Component } from './components/comunicacion1/comunicacion1.component';
import { Comunicacion2Component } from './components/comunicacion2/comunicacion2.component';
import { Comunicacion3Component } from './components/comunicacion3/comunicacion3.component';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './components/home/home.component';
import { Hijo1Component } from './components/hijo1/hijo1.component';
import { Hijo2Component } from './components/hijo2/hijo2.component';
import { Hijo3Component } from './components/hijo3/hijo3.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';

const routes: Routes = [
  { path: '', component: homeComponent },
  { path: 'InputOutput', component: Comunicacion1Component },
  { path: 'Servicio', component: Comunicacion2Component },
  { path: 'Ruta/:mensaje', component: Comunicacion3Component },
];

@NgModule({
  declarations: [
    AppComponent,
    Comunicacion1Component,
    Comunicacion2Component,
    Comunicacion3Component,
    homeComponent,
    Hijo1Component,
    Hijo2Component,
    Hijo3Component,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MenuScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
