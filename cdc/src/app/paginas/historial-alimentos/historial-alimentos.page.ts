import { Component, OnInit } from '@angular/core';
import { AlimentoService } from '../../Servicios/alimento.service';
import { Alimentos } from '../../interfaces/alimento';

@Component({
  selector: 'app-historial-alimentos',
  templateUrl: './historial-alimentos.page.html',
  styleUrls: ['./historial-alimentos.page.scss'],
})
export class HistorialAlimentosPage implements OnInit {

  alimentos: Alimentos[] = [];
  
  i: number = 0;
  periodoTiempo: string[] = ["SEMANAL", "MENSUAL", "ANUAL", "GLOBAL"];
  alimentosSemanalPrueba:string[]=[]
  constructor(private alimentoservices: AlimentoService) { }

  ngOnInit() {}

  Derecha()
  {
    if (this.i >= 3)
      this.i = 0;
    else
      this.i++;
  }

  Izquierda() {
    if (this.i <= 0)
      this.i = 3;
    else
      this.i--;
  }
}
