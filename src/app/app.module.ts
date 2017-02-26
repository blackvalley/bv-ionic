import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { CommunityPage } from '../pages/community/community';
import { EventsPage } from '../pages/events/events';
import { ConnectionsPage } from '../pages/connections/connections';
import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD
=======
import { CalendarPage } from '../pages/calendar/calendar';
import { ArticlePage } from '../pages/article/article';
import { Data } from '../providers/data';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
>>>>>>> blackvalley/profile-page

// AF2 Settings

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedPage,
    CommunityPage,
    EventsPage,
    ConnectionsPage,
<<<<<<< HEAD
=======
    ArticlePage,
    CalendarPage,
    ProfilePage,
>>>>>>> blackvalley/profile-page
    TabsPage
  ],
  imports: [
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
<<<<<<< HEAD
=======
    ArticlePage,
    CalendarPage,
    ProfilePage,
>>>>>>> blackvalley/profile-page
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
