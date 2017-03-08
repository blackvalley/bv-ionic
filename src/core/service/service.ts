import {Injectable} from '@angular/core'

import * as firebase from 'firebase'
//import the config
import { FIREBASE_CONFIG } from "../constant/constant"

@Injectable()
export class FirebaseConfigService {

    private database : firebase.database.Database
    private storage : firebase.storage.Storage
    private auth : firebase.auth.Auth
    constructor(){
      this.configureApp()
      this.configureDatabase()
      this.configureStorage()
      this.configureAuth()
    }
    //configure app with our specific db config
    configureApp(){
      firebase.initializeApp(FIREBASE_CONFIG)
    }
    //create a database reference object
    configureDatabase(){
      this.database = firebase.database()
    }
    //create a storage reference object
    configureStorage(){
      this.storage = firebase.storage()
    }
    //creates an auth reference
    configureAuth(){
      this.auth = firebase.auth()
    }
    //encapsulate databse object
    getDatabase() : firebase.database.Database{
      return this.database
    }
    //encapsulate storage object
    getStorage() : firebase.storage.Storage{
      return this.storage
    }
    //encapsulate auth object
    getAuth() : firebase.auth.Auth{
      return this.auth
    }
}
