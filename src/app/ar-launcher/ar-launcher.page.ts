import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ar-launcher',
  templateUrl: './ar-launcher.page.html',
  styleUrls: ['./ar-launcher.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  encapsulation: ViewEncapsulation.None,

})
export class ArLauncherPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
