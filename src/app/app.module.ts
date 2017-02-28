import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { CommunityPage } from '../pages/community/community';
import { EventsPage } from '../pages/events/events';
import { ConnectionsPage } from '../pages/connections/connections';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile'
import { FirebaseConfigService } from '../core/service/service'
import { UserProvider } from '../providers/user.provider'
import { DummyData } from '../providers/dummy.data'
import { CalendarPage } from '../pages/calendar/calendar';
import { ArticlePage } from '../pages/article/article';


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
    ArticlePage,
    CalendarPage,
    TabsPage,
    ProfilePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
      FirebaseConfigService,
      UserProvider,
      DummyData]

})
export class AppModule {}
