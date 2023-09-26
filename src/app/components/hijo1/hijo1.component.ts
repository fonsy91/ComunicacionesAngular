import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.scss']
})
export class Hijo1Component implements OnInit{

  //El padre nos enviara un emnsaje que llegara aqui y lo podremos
  //utilizar en el componente hijo.
  @Input() mensajeParaPadre: string = "";

  //Dato que va a recibir del padre de tipo objeto
  @Input() objetoPadre: any;

  ngOnInit(): void {
    console.log(this.objetoPadre);
  }
  

}
