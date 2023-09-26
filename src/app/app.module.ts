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

const routes: Routes = [
  { path: '', component: homeComponent },
  { path: 'Input', component: Comunicacion1Component },
];

@NgModule({
  declarations: [
    AppComponent,
    Comunicacion1Component,
    Comunicacion2Component,
    Comunicacion3Component,
    homeComponent,
    Hijo1Component
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
