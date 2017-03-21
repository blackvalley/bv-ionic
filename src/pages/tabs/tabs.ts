import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EventsPage } from '../events/events';
import { CommunityPage } from '../community/community';
import { CalendarPage } from '../calendar/calendar';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CalendarPage;
  tab3Root: any = CommunityPage;
  tab4Root: any = EventsPage;
  tab5Root: any = ProfilePage;

  constructor() {

  }
}
