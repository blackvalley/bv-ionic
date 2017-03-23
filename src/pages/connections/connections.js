var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { DummyData } from '../../providers/dummy.data';
import 'rxjs/add/operator/debounceTime';
var ConnectionsPage = (function () {
    function ConnectionsPage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.searchTerm = "";
        this.searching = false;
        this.searchControl = new FormControl();
    }
    ConnectionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    ConnectionsPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    ConnectionsPage.prototype.setFilteredItems = function () {
        this.items = this.dataService.filterItems(this.searchTerm);
    };
    return ConnectionsPage;
}());
ConnectionsPage = __decorate([
    Component({
        selector: 'page-connections',
        templateUrl: 'connections.html'
    }),
    __metadata("design:paramtypes", [NavController, DummyData])
], ConnectionsPage);
export { ConnectionsPage };
//# sourceMappingURL=connections.js.map