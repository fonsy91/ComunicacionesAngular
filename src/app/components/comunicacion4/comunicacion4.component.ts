import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comunicacion4',
  templateUrl: './comunicacion4.component.html',
  styleUrls: ['./comunicacion4.component.scss']
})
export class Comunicacion4Component implements OnInit{
  
  //Comunicacion entre componentes utilizando RxJs este componente
  //Sera el emisor de la informacion

  //Comunicacion RxJs sin servicio
  static mensaje$ = new Subject<string>();

  ngOnInit(): void {
    this.enviarMensaje();
  }

  enviarMensaje() {
    Comunicacion4Component.mensaje$.next('Hola soy un mensaje RxJs sin servicio')
  }
}
