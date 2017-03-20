import { Component } from '@angular/core';
import { EventData } from '../../providers/event.provider'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-community',
  templateUrl: 'community.html'
})
export class CommunityPage {

  constructor(private navCtrl:NavController, private eventData:EventData) {

  }
  // //uses Event provider to create an event
  // createEvent(eventName: string, eventDate: string, eventPrice: number,
  //   eventCost: number): void {
  //     this.eventData.createEvent(eventName, eventDate, eventPrice, eventCost)
  //     .then( () => {
  //         this.navCtrl.pop();
  //         });
  //     }

}
