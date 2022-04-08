import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SlotList } from '../entities/slot-list';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SlotListService {
  private url = "http://localhost:8080";
  constructor(private httpclient : HttpClient) { }
 
   //get
   public getSlotList() : Observable<SlotList[]> {
    return this.httpclient.get<SlotList[]>(`${this.url}/getScheduledInterviews`);
  }
}
