import { Component, OnInit, ViewChild } from '@angular/core';
import { Hijo5Component } from '../hijo5/hijo5.component';

@Component({
  selector: 'app-comunicacion5',
  templateUrl: './comunicacion5.component.html',
  styleUrls: ['./comunicacion5.component.scss']
})
export class Comunicacion5Component implements OnInit{

  @ViewChild('refHijo') childComponent!: Hijo5Component;

  mensajeAEnviar: string = "Envio mensaje con ViewChild"; 

  ngOnInit(): void {

  }

  mandarMsjAHijo() {
    this.childComponent.recibeMsj(this.mensajeAEnviar);
  }

  get codigoViewChild() {
    return `
    // Con ViewChild
    // Componente padre .ts
    @ViewChild('refHijo') childComponent!: Hijo5Component;
    mandarMsjAHijo() {
      this.childComponent.recibeMsj("Envio mensaje con ViewChild");
    }
    // Componente padre HTML
    <button (click)="mandarMsjAHijo()">Enviar Mensaje al Hijo</button>
    <app-hijo5 #refHijo></app-hijo5>

    // Componente hijo .ts
    mensaje: string = "";

    recibeMsj(msg: string) {
      this.mensaje = msg; 
    }

    // Con ViewChildren
    // Componente padre .ts
    @ViewChildren(ChildComponent) childComponents: QueryList<ChildComponent>;

    sendMessageToChildren() {
      this.childComponents.forEach(child => {
        child.receiveMessage('Mensaje desde el padre');
      });
    }

    // Componente padre HTML
    <button (click)="sendMessageToChildren()">Enviar Mensaje a los Hijos</button>

    // Componente hijo .ts
    message: string = '';

    receiveMessage(message: string) {
      this.message = message;
    }

    // Componente hijo HTML
    <p>{{ message }}</p>
    `;
  }

}
