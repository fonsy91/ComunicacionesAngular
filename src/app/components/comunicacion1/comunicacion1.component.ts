import { Component } from '@angular/core';

@Component({
  selector: 'app-comunicacion1',
  templateUrl: './comunicacion1.component.html',
  styleUrls: ['./comunicacion1.component.scss']
})
export class Comunicacion1Component {

  //Este es el componente padre
  //Texto que se enviara al hijo
  mensajePadre: string = "Hola soy tu padre";

  //Objeto que se enviara al hijo
  datosPersonales: any = {
    nombre: "Alfonso",
    apellido: "Casado",
    dni: "50776061L",
    telefono: 618294215
  }

  mensajeDesdePadre: string = "";

  //Metodo que envia el mensaje al hijo
  enviarMensajeNuevo() {
    this.mensajePadre = "Te envio un saludo";
  }

  receiveMessage(message: string) {
    this.mensajeDesdePadre = message;
  }

  get codigoInput() {
    return `
      //Comunicacion @Input
      //Componente padre .ts
      mensajePadre: string = "Hola soy tu padre";
      //Componente padre html
      <app-hijo1 [mensajeDesdePadre]="mensajePadre"></app-hijo1>
      //Componente hijo .ts
      @Input() mensajeDesdePadre: string = "";
      //Componente hijo .html
      <p>{{mensajeDesdePadre}}</p>
    `;
  }

  get codigoOutput() {
    return `
      //Comunicacion @Output
      //Componente padre .ts
      mensajeDesdePadre: string = "";
      //Componente padre html
      <app-hijo1 (mensajeParaPadre1)="receiveMessage($event)"></app-hijo1>
      <p>{{ mensajeDesdePadre }}</p>
      //Componente hijo .ts
      @Output() mensajeParaPadre1 = new EventEmitter<string>();
      //Componente hijo .html
      <p>{{mensajeDesdePadre}}</p>
    `;
  }


}
