import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CreateOppPage } from '../create-opp/create-opp'

/*
  Generated class for the Opportunities page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-opportunities',
  templateUrl: 'opportunities.html'
})
export class OpportunitiesPage {
  calendar: any = "event"

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  addOpp(){
    let oppModal = this.modalCtrl.create(CreateOppPage)
    oppModal.present()
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OpportunitiesPage');
  }

}
