import { Component, OnInit } from '@angular/core';
import { Observable, of , pipe } from 'rxjs';
import { Coordinates } from '../interfaces/coordinates';
import { LocationService } from '../services/location.service';

import { map } from 'rxjs/internal/operators/map';
//import * as $ from 'jquery';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss'],
})
export class UserLocationComponent implements OnInit {

  latitude = 0;
  longitude = 0;
  constructor(
    private locationService : LocationService
    ) 
    {  }


    ngOnInit(): void {
        this.getPos();
    }

  get curentLocation$(){
    return of(this.locationService.location);
  }
  
  getCurrentCoordinates(){
    this.locationService.getCurrentCoordinates();
    
  }

 getPos(){
  let self = this;
  self.locationService.getCurrentCoordinates().then((coord)=>{
    coord?.pipe(
      map((coords:Coordinates)=>{
        console.log(coords);
      })
    )
  }  )
      //$('#getPosi').trigger('click');
  console.log(
    self.locationService.location.latitude + " ;\n" +
    self.locationService.location.longitude
  );
 }
  

}
