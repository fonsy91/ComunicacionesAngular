import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo5',
  templateUrl: './hijo5.component.html',
  styleUrls: ['./hijo5.component.scss']
})
export class Hijo5Component implements OnInit{
  
  mensaje: string = "";

  ngOnInit(): void {
    
  }

  // Este metodo recibe un mensaje y lo agreaga a
  // mensaje 
  recibeMsj(msg: string) {
    this.mensaje = msg; 
  }

}


