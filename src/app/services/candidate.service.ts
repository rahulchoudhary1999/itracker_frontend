import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../entities/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private url = "http://localhost:8080";

  constructor(private http : HttpClient) {

   }
   //get
   public getCandidates() : Observable<Candidate[]> {
     return this.http.get<Candidate[]>(`${this.url}/recruiter-options/findCandidates`);
   }
   //post
   public addCandidate(candidate : Candidate) : Observable<Candidate>{
     return this.http.post<Candidate>(`${this.url}/employee/addCandidate`,candidate);
   }
   //put
   public updateCandidate(candidate : Candidate) : Observable<Candidate>{
    return this.http.put<Candidate>(`${this.url}/employee/updateCandidate`,candidate);
  }
   //delete
   public deleteCandidate(candidateId : number) : Observable<void>{
    return this.http.delete<void>(`${this.url}/employee/deleteCandidate/${candidateId}`);
  }

}
