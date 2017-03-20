import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { DummyData } from '../../providers/dummy.data';
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

  constructor(public navCtrl: NavController, public dataService: DummyData) {
      this.searchControl = new FormControl();
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
