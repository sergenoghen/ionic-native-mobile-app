import { IonicModule } from '@ionic/angular';
import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class EmailComponent  implements OnInit {
  
  constructor() { }

  ngOnInit() {}

}
