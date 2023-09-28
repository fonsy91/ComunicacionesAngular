import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.scss']
})
export class Hijo2Component implements OnInit{

  mensajeCompartido: any;

  constructor(private serviceCom: ComunicacionService){
  }

  ngOnInit(): void {
    //Aqui mostramos el mensaje directamente sin presionar el boton
    //this.mensajeCompartido = this.serviceCom.getData();
    //console.log(this.mensajeCompartido);
  }

  recibir() {
    this.mensajeCompartido = this.serviceCom.getData();
  }

 
}
