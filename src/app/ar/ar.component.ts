import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ArComponent implements OnInit {

  constructor(
    private locationService : LocationService,
    ) { }

  ngOnInit() {
    // console.log(this.locationService.location);
    //window.alert('AR')
  }

}
