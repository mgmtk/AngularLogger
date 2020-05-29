import { Injectable } from '@angular/core';
import { ItemResponse } from '../model/logItemResponse'
import { ITEMS } from '../data/mockItems'
import {Observable, of} from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogItemService {
  items: AngularFireList<ItemResponse>;
  

  constructor(db: AngularFireDatabase) {
      this.items=  db.list('/LogItem')
      this.items.snapshotChanges().subscribe(item => {
        console.log(item)
      });
  }

  getLogItems(): Observable<AngularFireList<ItemResponse>> {
    return of(this.items)
  }
}
