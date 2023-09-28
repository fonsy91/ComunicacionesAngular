import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunicacion3',
  templateUrl: './comunicacion3.component.html',
  styleUrls: ['./comunicacion3.component.scss']
})
export class Comunicacion3Component implements OnInit{

  //Aqui utilizaremos la comunicacion a traves de la ruta
  //para enviar datos
  constructor(private router: Router){}
  
  ngOnInit(): void {
    //const mensaje = "Hola soy mensaje de ruta";
    //this.router.navigate(['/Ruta',mensaje]);
    this.enviarMensaje();
  }

  enviarMensaje() {
    const mensaje = "Hola soy mensaje de ruta";
    this.router.navigate(['/Ruta',mensaje]);
  }

}
