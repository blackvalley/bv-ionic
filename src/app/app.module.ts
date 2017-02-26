import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { CommunityPage } from '../pages/community/community';
import { EventsPage } from '../pages/events/events';
import { ConnectionsPage } from '../pages/connections/connections';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';
import { ArticlePage } from '../pages/article/article';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { RegisterPage } from '../pages/register/register';
import { Data } from '../providers/data';
import {FIREBASE_CONFIG } from '../core/constant/constant';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedPage,
    CommunityPage,
    EventsPage,
    ConnectionsPage,
    ArticlePage,
    CalendarPage,
    ProfilePage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedPage,
    CommunityPage,
    EventsPage,
    ConnectionsPage,
    ArticlePage,
    CalendarPage,
    ProfilePage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}
