import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ComunicacionRxjsService } from 'src/app/services/comunicacion-rxjs.service';

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

  static mensajeBehaviorSubject = new BehaviorSubject<string>('');

  constructor(private serviceRxjs: ComunicacionRxjsService) {}

  ngOnInit(): void {
    this.enviarMensaje();
    this.enviarMensaje2();
  }

  enviarMensaje() {
    //Comunicacion4Component.mensaje$.next('Hola soy un mensaje RxJs sin servicio');
    Comunicacion4Component.mensajeBehaviorSubject.next('Hola soy un mensaje RxJs sin servicio');
    
  }

  //Comunicacion RxJs con servicio
  mensaje = "Hola soy un mensaje RxJs con servicio";

  enviarMensaje2() {
    this.serviceRxjs.enviarMensaje(this.mensaje);
  }

}
