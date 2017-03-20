import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { FirebaseConfigService } from '../core/service/service'



@Injectable()
export class EventData {

  // private eventList : firebase.database.Reference;
  // private currentUser;
  //
  // constructor(public http: Http, private fire: FirebaseConfigService) {
  //   console.log('Hello EventData Provider');
  //   this.currentUser = this.fire.getAuth().currentUser
  //   this.eventList = this.fire.getDatabase()
  //             .ref('users/${{this.currentUser}}/eventList');
  //           }
  //  createEvent(eventName: string, eventDate: string, eventPrice: number,
  //     eventCost: number): firebase.Promise<any> {
  //     return this.eventList.push({
  //       name: eventName,
  //       date: eventDate,
  //       price: eventPrice * 1,
  //       cost: eventCost * 1,
  //       revenue: eventCost * -1
  //     });
  //   }
  //   getEventList(): firebase.database.Reference {
  //     return this.eventList;
  //   }
  //   getEventDetail(eventId): firebase.database.Reference {
  //   return this.eventList.child(eventId);
  //   }

}
