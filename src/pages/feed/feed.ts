import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { CreateEventPage } from '../create-event/create-event';



@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  constructor(private modalCtrl: ModalController) {

  }

  addEvent(){
    let eventModal = this.modalCtrl.create(CreateEventPage)
    eventModal.present()
  }

}
