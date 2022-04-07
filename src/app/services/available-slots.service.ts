import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvailableSlots } from '../utility/AvailableSlots';

@Injectable({
  providedIn: 'root'
})
export class AvailableSlotsService {

  baseUrl: string ="http://localhost:8080/recruiter/availableSlots"

  constructor(private http : HttpClient) { }

  public allSlots() :  Observable<AvailableSlots[]>
  {
      return this.http.get<AvailableSlots[]>(`${this.baseUrl}`);    
  }
}
