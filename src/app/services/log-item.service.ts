import { Injectable } from '@angular/core';
import { ItemResponse } from '../model/logItemResponse.model'
import  * as StaticItems  from '../../mock-data/mockItems.json'
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogItemService {

  constructor() { }

  getLogItems(): Observable<ItemResponse[]> {
    const items = StaticItems as any;
    return of(items.default.map((a) => new ItemResponse(a)))
  }
}
