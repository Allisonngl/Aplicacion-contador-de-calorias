import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-historial-dietas',
  templateUrl: './historial-dietas.page.html',
  styleUrls: ['./historial-dietas.page.scss'],
})
export class HistorialDietasPage implements OnInit {

  public photo: Photo[]=[];
  photos: Photo[];
  
  constructor(private photoSvc: PhotoService) { 
  }

   async ngOnInit() {
    this.photoSvc.loadSaved().then(() => {
      this.photos = this.photoSvc.getPhotos();
    });
  }   
  
    public newPhoto(): void{
    this.photoSvc.addNewToGallery()
  }

  totalDietasCreadas: number = 2;
  numeroDietaActual: number = 0;
  nombresDietas: String[] = ["Por Defecto","xddddd","DDDDDDD"];
  cantidadCalorias: number[] = [2000,5000,3000];
  fechaCreacion: String[] = ["19-04-2021","185/52/52","65/98/14"];

  Izquierda()
  {
    if (this.numeroDietaActual <= 0)
      this.numeroDietaActual = this.totalDietasCreadas;
    else
      this.numeroDietaActual--;
  }

  Derecha()
  {
    if (this.numeroDietaActual >= this.totalDietasCreadas)
      this.numeroDietaActual = 0;
    else
      this.numeroDietaActual++;
  }

  deleteTask(index){
    this.photos.splice(index, 1);

  }
}
