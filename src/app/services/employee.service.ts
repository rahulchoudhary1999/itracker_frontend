import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../entities/employee';
import { Observable } from 'rxjs';
import { Candidate } from '../entities/candidate';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:8080";

  constructor(private http : HttpClient) {

   }
   //get
   public getEmployeeByEmail(email : string) : Observable<Employee> {
     return this.http.get<Employee>(`${this.url}/recruiter-options/getEmployeeByEmail/${email}`);
   }
}
