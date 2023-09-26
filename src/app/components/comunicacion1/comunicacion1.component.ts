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

  //Metodo que envia el mensaje al hijo
  enviarMensajeNuevo() {
    this.mensajePadre = "Te envio un saludo";
  }

}
