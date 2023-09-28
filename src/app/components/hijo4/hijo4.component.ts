import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Comunicacion4Component } from '../comunicacion4/comunicacion4.component';

@Component({
  selector: 'app-hijo4',
  templateUrl: './hijo4.component.html',
  styleUrls: ['./hijo4.component.scss']
})
export class Hijo4Component implements OnInit{

  mensajeRecibido: string = "";
  private subscription: Subscription = new Subscription;
  
  constructor() {
    this.subscription = Comunicacion4Component.mensaje$.subscribe((mensaje) => {
      this.mensajeRecibido = mensaje;
    });
  }
  ngOnInit(): void {
    console.log("El mensaje es: ", this.mensajeRecibido);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
