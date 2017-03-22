import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CommunityPage } from '../pages/community/community';
import { EventsPage } from '../pages/events/events';
import { ConnectionsPage } from '../pages/connections/connections';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile'
import { FirebaseConfigService } from '../core/service/service'
import { UserProvider } from '../providers/user.provider'
import { DummyData } from '../providers/dummy.data'
import { ArticlePage } from '../pages/article/article';
import { CommentsPage } from '../pages/comments/comments';
import { OpportunitiesPage } from '../pages/opportunities/opportunities';
import { LoginPage } from '../pages/login/login'
import { SignupPage } from '../pages/signup/signup'
import { PwresetPage } from '../pages/pwreset/pwreset'
import { CreateEventPage } from '../pages/create-event/create-event';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { CreateOppPage } from '../pages/create-opp/create-opp';
import { AuthProvider } from '../providers/auth.provider'
import { ProfileData } from '../providers/profile.data'
import { EventData } from '../providers/event.provider'


@NgModule({
  declarations: [
    MyApp, HomePage,
    CommunityPage, EventsPage,
    ConnectionsPage,
    ArticlePage,
    CreateEventPage,
    EditProfilePage,
    CreateOppPage,
    ProfilePage,
    CommentsPage,
    OpportunitiesPage,
    TabsPage,
    LoginPage,
    SignupPage,
    PwresetPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CommunityPage,
    EventsPage,
    ConnectionsPage,
    ArticlePage,
    CreateEventPage,
    EditProfilePage,
    CreateOppPage,
    TabsPage,
    CommentsPage,
    OpportunitiesPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    PwresetPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
      FirebaseConfigService,
      UserProvider, ProfileData,
      AuthProvider, EventData,
      DummyData]

})
export class AppModule {}
