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
    this.enviarMensaje();
  }

  enviarMensaje() {
    const mensaje = "Hola soy mensaje de ruta";
    this.router.navigate(['/Ruta',mensaje]);
  }

  get codigoRuta() {
    return `
    //app.module.ts para la configuracion de las rutas
    const routes: Routes = [
      { path: '', component: homeComponent },
      { path: 'Ruta/:mensaje', component: Comunicacion3Component },
    ];

    //Componente 1º
    constructor(private router: Router){}
  
    ngOnInit(): void {
      this.enviarMensaje();
    }

    enviarMensaje() {
      const mensaje = "Hola soy mensaje de ruta";
      this.router.navigate(['/Ruta',mensaje]);
    }

    //Componente 2º
    mensaje: any;

    constructor(private route: ActivatedRoute){}

    ngOnInit(): void {
      // Obtén el valor del parámetro 'mensaje' de la ruta
      this.mensaje = this.route.snapshot.paramMap.get('mensaje');
      console.log(this.mensaje);
    }

    `;
  }
}
