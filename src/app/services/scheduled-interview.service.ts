import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScheduledInterviews } from '../entities/scheduled-interviews';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Candidate } from '../entities/candidate';
@Injectable({
  providedIn: 'root'
})
export class ScheduledInterviewService {
  private url = "http://localhost:8080";

  constructor(private http : HttpClient) {}
   //get
   public getScheduledinterviews() : Observable<ScheduledInterviews[]> {
     return this.http.get<ScheduledInterviews[]>(`${this.url}/recruiter-options/getScheduledInterviews`);
   }
   //post
   public addScheduledinterviews(interview : ScheduledInterviews) : Observable<ScheduledInterviews>{
     return this.http.post<ScheduledInterviews>(`${this.url}/recruiter-options/addScheduledInterview`,interview).pipe(catchError(this.erroHandler));
   }
   
   erroHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || "server error"));
  }
}
