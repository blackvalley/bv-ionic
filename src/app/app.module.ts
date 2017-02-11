import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { CommunityPage } from '../pages/community/community';
import { EventsPage } from '../pages/events/events';
import { ConnectionsPage } from '../pages/connections/connections';
import { TabsPage } from '../pages/tabs/tabs';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
apiKey: "AIzaSyDnAX0CQbbsMYuOTJ66ox_F0GwzPM4XPXY",
authDomain: "angularfire2-list-example.firebaseapp.com",
databaseURL: "https://angularfire2-list-example.firebaseio.com",
storageBucket: "",
messagingSenderId: "609067141823"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedPage,
    CommunityPage,
    EventsPage,
    ConnectionsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedPage,
    CommunityPage,
    EventsPage,
    ConnectionsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
