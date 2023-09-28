import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  //Servicio que hace las comunicaciones entre el componente 
  //comunicacion2 y hijo2

  private data: any;

  constructor() { }

  //Metodos del servicio
  getData() {
    return this.data;
  }

  updateData(newData: any) {
    this.data = newData
  }

}
