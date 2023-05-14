import { Injectable } from '@angular/core';
//import * as Geolocation from 'expo-location';
//import * as geolocation from '@nativescript/geolocation';
//import { Geolocation } from '@ionic-native/geolocation';
import { Geolocation } from '@capacitor/geolocation';


import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coordinate, Coordinates } from '../interfaces/coordinates';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  location:any = new Coordinate(0,0);
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  locations: Coordinates[] = [];
  userCoords$!: Observable<Coordinates>;
  
  constructor(
  ) {
    this.setUserCoords();
  }

  ngOnInit() {
  }

  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600,
    accuracy: 0.1,
  };
  
  // use geolocation to get user's device coordinates
  async getCurrentCoordinates() {
    try {
      const resp = await Geolocation.getCurrentPosition(this.options);
      //this.location.latitude = resp.coords.latitude;
      this.location = resp.coords;
      //console.log(this.location);
      
      return of(this.location);
    } catch (error) {
      console.error('Error getting location', error);
      return ;
    }/**/
  }

  async setUserCoords(){
    let self = this;
    var data:Coordinates ;
    return await this.getCurrentCoordinates().then(
      coords$=>{
        coords$?.pipe(
          map((coords:Coordinates)=>{
            console.log(coords);
            data = coords;
            return coords;
          })
        )
      }
    ).finally(
      function(){
        console.table("Recherche d'adresse terminee");        
        self.userCoords$ = of(self.location);
        console.log(self.location)
      }
    )
  }

  get getUserCoords(){
    //this.setUserCoords();
    return this.userCoords$;
  }
  
}
