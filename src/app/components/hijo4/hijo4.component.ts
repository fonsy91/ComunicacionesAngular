import { Component, OnInit } from '@angular/core';
import { Subscription, delay, of } from 'rxjs';
import { Comunicacion4Component } from '../comunicacion4/comunicacion4.component';
import { ComunicacionRxjsService } from 'src/app/services/comunicacion-rxjs.service';

@Component({
  selector: 'app-hijo4',
  templateUrl: './hijo4.component.html',
  styleUrls: ['./hijo4.component.scss']
})
export class Hijo4Component implements OnInit{

  //Comunicacion sin servicio
  mensajeRecibido: string = "";
  private subscription: Subscription = new Subscription;

  //Comunicacion con servicio
  mensajeRecibido2: string = "";
  
  constructor(private serviceRxJs: ComunicacionRxjsService) {
    
  }
  ngOnInit(): void {
    this.subscription = Comunicacion4Component.mensajeBehaviorSubject.subscribe((mensaje) => {
      this.mensajeRecibido = mensaje;
      console.log("El mensaje es: ", this.mensajeRecibido);
    },
    (error) => {
      console.error("Error en la suscripción:", error);
    });
    
    //Nos suscribimos al Subject de otro componene que esta emitiendo los datos
    this.serviceRxJs.recibirMensaje().subscribe((mensaje) => {
      this.mensajeRecibido2 = mensaje;
      console.log("El mensaje es: ", this.mensajeRecibido2);
    });
  }

  //Metodo que retrasa el programa un segundo
  realizarAccionConRetraso() {
    // Crea un observable que emite un valor después de un segundo de retraso
    of('Acción realizada después de un segundo').pipe(
      delay(2000) // Delay de 1000 milisegundos (1 segundo)
    ).subscribe((resultado) => {
      console.log(resultado);
      // Aquí puedes realizar la acción deseada después del retraso
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
