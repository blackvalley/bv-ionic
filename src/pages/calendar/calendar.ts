import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SxswPage } from '../sxsw/sxsw';

/*
  Generated class for the Calendar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {
  calendar: any = "events"


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  sxswschedule() {
    this.navCtrl.push(SxswPage)
  }

}
