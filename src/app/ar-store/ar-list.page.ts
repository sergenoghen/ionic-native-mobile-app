

import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Gesture, GestureController, IonicModule, ModalController } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';
import { ArLauncherPage } from '../ar-launcher/ar-launcher.page';
import { LocationBasedArComponent } from '../ar/location-based-ar/location-based-ar.component';
import { TextureArComponent } from '../ar/texture-ar/texture-ar.component';

@Component({
  selector: 'ar-list.page',
  templateUrl: './ar-list.page.html',
  styleUrls: ['./ar-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  encapsulation: ViewEncapsulation.None,

})
export class ArListPage implements OnInit {
  constructor(private modalCtrl: ModalController, public gestureCtrl: GestureController) { }

  ngOnInit() {
  }

  
async openMarkerAR() {
  const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: ArLauncherPage,
      // swipeToClose: true,
      // presentingElement: this.routerOutlet.nativeEl,
      backdropDismiss: true
  });

  return await modal.present();
}
 

  
async openLocationBasedAR() {
  const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: LocationBasedArComponent,
      // swipeToClose: true,
      // presentingElement: this.routerOutlet.nativeEl,
      backdropDismiss: true
  });

  return await modal.present();
}

  
async openTextureAR() {
  const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: TextureArComponent,
      // swipeToClose: true,
      // presentingElement: this.routerOutlet.nativeEl,
      backdropDismiss: true
  });

  return await modal.present();
}

  
async open3DObjectAR() {
  const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: TextureArComponent,
      // swipeToClose: true,
      // presentingElement: this.routerOutlet.nativeEl,
      backdropDismiss: true
  });

  return await modal.present();
}








  
  swipeDownToCloseModal = (elm: HTMLElement)=>{
    const swipeGesture: Gesture = this.gestureCtrl.create({
      el:elm,
      threshold:1,
      maxAngle:95,
      gestureName:'swipeGesture',
      onEnd:e=>{
        if(e.velocityY>0.15 && e.deltaY>100 && elm.getBoundingClientRect().y===0){
          this.modalCtrl.dismiss(); //change
        }
      }
    });
    swipeGesture.enable(true);
  };


}
