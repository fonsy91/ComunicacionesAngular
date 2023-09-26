import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { MenuScriptService } from './services/menu-script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  title = 'Angular';

  constructor(private CargarScript: MenuScriptService){
    CargarScript.Cargar();
  }

  ngOnInit(): void {
    
  }



  
}
