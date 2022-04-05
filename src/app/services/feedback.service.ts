import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateFeedback } from '../utility/CandidateFeedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

   baseUrl: string ="http://localhost:8080/candidateFeedback/"

  constructor(private http:HttpClient) { }
  
  public allFeedbacks() :  Observable<CandidateFeedback[]>
  {
    return this.http.get<CandidateFeedback[]>(`${this.baseUrl}`);     
  }
}
