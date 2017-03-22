import { Component } from '@angular/core';
import { NavController, ViewController, NavParams} from 'ionic-angular';
import { ArticlePage } from '../article/article';

/*
  Generated class for the Comments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

  closeComments(){
    this.viewCtrl.dismiss();
  }

  article(){
    this.navCtrl.push(ArticlePage);
  }

}
