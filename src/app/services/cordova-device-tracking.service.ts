//cordova-device-tracking.service

import { Injectable, NgZone } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Coordinates } from '@ionic-native/geolocation';
import { Coordinate } from '../interfaces/coordinates';
//import { Coordinate, Coordinates } from '../interface/coordinates.interface';

@Injectable({
  providedIn: 'root'
})
export class CordovaDeviceTrackingService {

  
  public latitude!: number;
  public longitude!: number;
  private watchId: any = null;
  public position!:Coordinates  ;

  constructor(
    private geolocation: Geolocation,
    private zone: NgZone
  ) {
    this.latitude = 0;
    this.longitude = 0;
  }

  public updateLocation(){

      this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude =  resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.position = new Coordinate(this.longitude,this.latitude);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
      
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        //this.latitude =  data.latitude;
        // this.longitude = data.coords.longitude;
        // this.position = data;
        console.log(data);
        
      },
        error=>console.log(error)
      );

  }
  
  // public updateLocation() {
  //   Geolocation.isEnabled().then(confirme=>{
  //       if(confirme){
  //           this.getDeviceLocation().then(result => {
  //               this.latitude = result.latitude;
  //               this.longitude = result.longitude;
  //               this.position = new Coordinate(this.longitude,this.latitude);
  //           }, error => {
  //               console.error(error);
  //           });
  //       }
  //   })
  // }


}
