import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {FirebaseAuth, AuthProviders, AuthMethods, AngularFire} from 'angularfire2';

export class User {
  fname: string;
  lname: string;
  email: string;
  bio: any;
  img: string;

  constructor(fname: string, lname: string, bio: any, img: string, email: string, public af: AngularFire) {
    this.fname = name;
    this.lname = lname;
    this.email = email;
    this.bio = bio;
    this.img = img;

  }

}

@Injectable()
export class AuthService {
 // currentUser: User;

  public dbURL = "https://bv-ionic.firebaseio.com/bv-ionic"

  users: any;

  constructor(private auth: FirebaseAuth, public af: AngularFire) {
    this.users = af.database.list('users');


  }


  public  setCurrentUser(uid: string):any {

    const currentUser = this.af.database.object(`/users/${this.auth.getAuth().uid}`);
    console.log(currentUser);

    this.af.database.object(`/users/${this.auth.getAuth().uid}`)
      .subscribe(user => console.log(user) );

    return currentUser;
  }

  public getCurrentUser(uid: string) {
    //return this.currentUser;
  }

}


