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

  //Codigo a mostrar
  get codigoMetodosRxjs() {
    return `
    // Crear un Subject sin valor inicial
    const subject = new Subject<any>();
    // Crear un BehaviorSubject con un valor inicial
    const behaviorSubject = new BehaviorSubject<string>('Valor inicial');
    // Crear un ReplaySubject con un valor inicial y un tamaño de historial (por ejemplo, 2)
    const replaySubject = new ReplaySubject<number>(2);
    `;
  }

  get codigoRxjs() {
    return `
    // Componente emisor sin servicio
    static mensajeBehaviorSubject = new BehaviorSubject<string>('');

    ngOnInit(): void {
      this.enviarMensaje();
    }

    enviarMensaje() {
      Comunicacion4Component.mensajeBehaviorSubject.next('Hola soy un mensaje RxJs sin servicio');
    }

    // Componente Receptor sin servicio
    mensajeRecibido: string = "";
    private subscription: Subscription = new Subscription;

    ngOnInit(): void {
      this.subscription = Comunicacion4Component.mensajeBehaviorSubject.subscribe((mensaje) => {
        this.mensajeRecibido = mensaje;
        console.log("El mensaje es: ", this.mensajeRecibido);
      },
      (error) => {
        console.error("Error en la suscripción:", error);
      });
    }

    // **********************************************************
    // Servicio
    private mensajeSubject = new Subject<string>();
    private  mensajeSubject2 = new BehaviorSubject<string>('');

    constructor() { }

    enviarMensaje(mensaje: string) {
      //this.mensajeSubject.next(mensaje);
      this.mensajeSubject2.next(mensaje);
    }

    recibirMensaje(): Observable<string> {
      //return this.mensajeSubject.asObservable();
      return this.mensajeSubject2.asObservable();
    }

    // Componente emisor con servicio
    mensaje = "Hola soy un mensaje RxJs con servicio";

    constructor(private serviceRxjs: ComunicacionRxjsService) {}

    ngOnInit(): void {
      this.enviarMensaje2();
    }

    enviarMensaje2() {
      this.serviceRxjs.enviarMensaje(this.mensaje);
    }

    // Componente Receptor con servicio
    mensajeRecibido2: string = "";
  
    constructor(private serviceRxJs: ComunicacionRxjsService) {}

    ngOnInit(): void {
      //Nos suscribimos al Subject de otro componene que esta emitiendo los datos
      this.serviceRxJs.recibirMensaje().subscribe((mensaje) => {
        this.mensajeRecibido2 = mensaje;
        console.log("El mensaje es: ", this.mensajeRecibido2);
      });
    }
    // **********************************************************
    // Siempre en ambos
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    `;
  }

}
