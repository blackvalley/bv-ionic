var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var DummyData = (function () {
    function DummyData(http) {
        this.http = http;
        this.items = [
            { title: 'Dakari' },
            { title: 'Paul' },
            { title: 'Danny' },
            { title: 'Lusenii' },
            { title: 'Pacer' },
            { title: 'Lucy' }
        ];
    }
    DummyData.prototype.filterItems = function (searchTerm) {
        return this.items.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    return DummyData;
}());
DummyData = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], DummyData);
export { DummyData };
//# sourceMappingURL=dummy.data.js.map