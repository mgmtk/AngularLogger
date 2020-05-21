import { Injectable } from '@angular/core';
import { ItemResponse } from '../model/logItemResponse'
import { ITEMS } from '../data/mockItems'
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogItemService {

  constructor() { }

  getLogItems(): Observable<ItemResponse[]> {
    return of(ITEMS)
  }
}
