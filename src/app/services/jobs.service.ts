import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApplication } from '../utility/JobApplication';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl: string ="http://localhost:8080/employee/jobs"
   // baseUrl: string = "https://jsonplaceholder.typicode.com/users/"
  constructor(private http:HttpClient ) { }
   
   public allJobs() : Observable<JobApplication[]>
   {
     return this.http.get<JobApplication[]>(`${this.baseUrl}`);
   }
  

}
