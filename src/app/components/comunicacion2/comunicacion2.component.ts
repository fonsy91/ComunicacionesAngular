import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-comunicacion2',
  templateUrl: './comunicacion2.component.html',
  styleUrls: ['./comunicacion2.component.scss']
})
export class Comunicacion2Component implements OnInit{

  //Primer componente que se va a comunicar con hijo2 a traves de un servicio

  constructor(private serviceCom: ComunicacionService) {}

  ngOnInit(): void {
    this.enviarMensaje();
  }

  //Usamos el servicio para obtener datos
  enviarMensaje() {
    const mensaje = 'Hola, soy un mensaje compartido';
    this.serviceCom.updateData(mensaje);
  }

  get codigoService() {
    return `
    //Servicio intermediario que comunica dos componentes
    private data: any;

    getData() {
      return this.data;
    }

    updateData(newData: any) {
      this.data = newData
    }

    //Componente 1º
    constructor(private serviceCom: ComunicacionService) {}

    ngOnInit(): void {
      this.enviarMensaje();
    }

    //Usamos el servicio para obtener datos
    enviarMensaje() {
      const mensaje = 'Hola, soy un mensaje compartido';
      this.serviceCom.updateData(mensaje);
    }

    //Componente 2º
    mensajeCompartido: any;

    constructor(private serviceCom: ComunicacionService){
    }

    recibir() {
      this.mensajeCompartido = this.serviceCom.getData();
    }
    `;
  }

}
