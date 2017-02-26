import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ArticlePage } from '../article/article';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  article(){
    this.navCtrl.push(ArticlePage);
  }

}
