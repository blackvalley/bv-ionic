import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { ConnectionsPage } from '../connections/connections';
import {FirebaseAuth, AuthProviders, AuthMethods, AngularFire} from 'angularfire2';
import firebase from 'firebase';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  name = '';
  email = '';
  user: any;
  currentUser = this.af.database.object(`/users/${firebase.auth().currentUser.uid}`);
  item: any;

  // set user details to current user
  constructor(private navCtrl: NavController, private auth: FirebaseAuth,
              public af: AngularFire,  private authServ: AuthService) {
   //this.name = auth.FirebaseApp

    console.log("currentUser "+this.currentUser);
/*
      this.currentUser  = this.af.database.list('/users', {
        query: {
          equalTo: firebase.auth().currentUser.uid
        }
    });
      console.log(this.currentUser);

        this.af.database.object(`/users/${firebase.auth().currentUser.uid}`)
    .subscribe(user => this.user = user );
*/

    this.item = af.database.object(`/users/${firebase.auth().currentUser.uid}`, { preserveSnapshot: true });
    this.item.subscribe(snapshot => {
      console.log(snapshot.key)
      this.user   = snapshot.val();
      console.log(snapshot.val())
    });

    console.log(this.user);

  /*  console.log(firebase.auth().currentUser.uid);

    console.log("User Info 1: "+ this.user);

   this.user = this.af.database.object(`/users/${firebase.auth().currentUser.uid}`)
      .subscribe(user => console.log(user) );
    console.log("User Info 2: "+ this.user);*/

  }

  public logout() {

    this.auth.logout();
    console.log("logout sccessful");
    this.navCtrl.setRoot(LoginPage);
  }

  launchConnPage(){
    this.navCtrl.push(ConnectionsPage);
  }


}
