var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MultiChatPage } from '../pages/multichat/multichat';
import { EventsPage } from '../pages/events/events';
import { ConnectionsPage } from '../pages/connections/connections';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { FirebaseConfigService } from '../core/service/service';
import { UserProvider } from '../providers/user.provider';
import { DummyData } from '../providers/dummy.data';
import { ArticlePage } from '../pages/article/article';
import { CommentsPage } from '../pages/comments/comments';
import { OpportunitiesPage } from '../pages/opportunities/opportunities';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PwresetPage } from '../pages/pwreset/pwreset';
import { CreateEventPage } from '../pages/create-event/create-event';
import { EventDetailPage } from '../pages/event-detail/event-detail'
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { CreateOppPage } from '../pages/create-opp/create-opp';
import { OppDetailPage } from '../pages/opp-detail/opp-detail'
import { AuthProvider } from '../providers/auth.provider';
import { ProfileData } from '../providers/profile.data';
import { EventData } from '../providers/event.provider';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp, HomePage,
            MultiChatPage, EventsPage,
            ConnectionsPage,
            ArticlePage,
            CreateEventPage,
            EditProfilePage,
            CreateOppPage,
            OppDetailPage,
            ProfilePage,
            CommentsPage,
            OpportunitiesPage,
            EventDetailPage,
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
            MultiChatPage,
            EventsPage,
            ConnectionsPage,
            ArticlePage,
            CreateEventPage,
            OppDetailPage,
            EditProfilePage,
            CreateOppPage,
            TabsPage,
            CommentsPage,
            OpportunitiesPage,
            EventDetailPage,
            ProfilePage,
            LoginPage,
            SignupPage,
            PwresetPage
        ],
        providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
            FirebaseConfigService,
            UserProvider, ProfileData,
            AuthProvider, EventData,
            DummyData]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
