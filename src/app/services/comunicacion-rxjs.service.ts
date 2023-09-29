import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionRxjsService {

  private mensajeSubject = new Subject<string>();
  private  mensajeSubject2 = new BehaviorSubject<string>('');


  constructor() { }

  enviarMensaje(mensaje: string) {
    this.mensajeSubject2.next(mensaje);
  }

  recibirMensaje(): Observable<string> {
    return this.mensajeSubject2.asObservable();
  }

}
