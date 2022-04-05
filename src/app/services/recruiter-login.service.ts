import { Injectable } from '@angular/core';
import {RecruiterLogin} from 'src/app/entities/recruiter-login'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecruiterLoginService {

  private url = "http://localhost:8080";

  constructor(private http : HttpClient) {

   }
   //get
   public getRecruiterCreds(usernm : string) : Observable<RecruiterLogin> {
     return this.http.get<RecruiterLogin>(`${this.url}/employee/getRecruiterByusername`);
   }
   //post
   public postRecruiterCreds(rec : RecruiterLogin) : Observable<RecruiterLogin>{
     return this.http.post<RecruiterLogin>(`${this.url}/employee/addRecruiterByusername`,rec);
   }
  
}
