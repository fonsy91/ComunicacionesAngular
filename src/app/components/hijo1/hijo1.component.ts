import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.scss']
})
export class Hijo1Component implements OnInit{

  //El padre nos enviara un emnsaje que llegara aqui y lo podremos
  //utilizar en el componente hijo.
  @Input() mensajeDesdePadre: string = "";

  //Dato que va a recibir del padre de tipo objeto
  @Input() objetoPadre: any;

  //Mensaje que vamos a enviar al padre
  @Output() mensajeParaPadre1 = new EventEmitter<string>();
  //@Output() mensajeParaPadre3: string = "";

  ngOnInit(): void {
    console.log(this.objetoPadre);
    const mensaje = "Hola desde el hijo";
    this.mensajeParaPadre1.emit(mensaje);
  }
  
  enviarMensajePadre() {
    const mensaje = "Hola desde el hijo";
    this.mensajeParaPadre1.emit(mensaje);
  }

}
