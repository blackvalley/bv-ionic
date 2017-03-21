import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { CreateEventPage } from '../create-event/create-event';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  constructor(private modalCtrl: ModalController) {

  }

  addEvent(){
    let eventModal = this.modalCtrl.create(CreateEventPage)
    eventModal.present()
  }

}
