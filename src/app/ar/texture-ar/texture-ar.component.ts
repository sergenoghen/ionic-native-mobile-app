import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { ModalController } from '@ionic/angular';
import { Coordinates } from 'src/app/interfaces/coordinates';

@Component({
  selector: 'app-texture-ar',
  templateUrl: './texture-ar.component.html',
  styleUrls: ['./texture-ar.component.scss'],
})
export class TextureArComponent implements OnInit {

     userCoords : Coordinates | undefined;
  constructor(
    private locationService : LocationService,
    private modalCtrl : ModalController,
  ) { }

  ngOnInit(  ) {
    //this.locationService.getUserCoords;
    this.userCoords = this.locationService.location;
    console.log(this.userCoords);
    
  }

  close() {
    this.modalCtrl.dismiss();
  }

  get getUserCoords(){
    return this.locationService.getUserCoords;
  }
}
