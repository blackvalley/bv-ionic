import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-create-opp',
  templateUrl: 'create-opp.html'
})
export class CreateOppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {}


  // //uses Event provider to create an event
  // createEvent(eventName: string, eventDate: string, eventPrice: number,
  //   eventCost: number): void {
  //     this.eventData.createEvent(eventName, eventDate, eventPrice, eventCost)
  //     .then( () => {
  //         this.navCtrl.pop();
  //         });
  //     }

  closeOpp(){
    this.viewCtrl.dismiss();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }



}
