import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MessageContentComponent }from '../message/message-content/message-content.component';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
  standalone: true,
  imports: [IonicModule, MessageContentComponent]
})
export class SendEmailComponent  implements OnInit {

  constructor(
    private title : Title,
  ) { }

  ngOnInit() {
    this.title = "Send email : Ionic native app"
  }

}
