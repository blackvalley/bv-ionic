import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { Data } from '../../providers/data';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;
  events: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public dataService: Data, af: AngularFire) {
    this.searchControl = new FormControl();
    this.events = af.database.list('/events');
  }

  ionViewDidLoad() {

    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(100).subscribe(search => {

      this.searching = false;
      this.setFilteredItems();

    });


  }

  onSearchInput(){
    this.searching = true;
  }

  setFilteredItems() {

    this.items = this.dataService.filterItems(this.searchTerm);

  }
}
