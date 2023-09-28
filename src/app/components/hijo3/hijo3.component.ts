import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hijo3',
  templateUrl: './hijo3.component.html',
  styleUrls: ['./hijo3.component.scss']
})
export class Hijo3Component implements OnInit{
  
  //Este es el componente que va a recibir los datos a traves de la ruta
  
  mensaje: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    // Obtén el valor del parámetro 'mensaje' de la ruta
    this.mensaje = this.route.snapshot.paramMap.get('mensaje');
    console.log(this.mensaje);
  }
  
}
