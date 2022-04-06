import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/entities/candidate';
import { CandidateService } from 'src/app/services/candidate.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClient } from '@angular/common/http';
import { SecurityService } from 'src/app/security.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recruiter-options',
  templateUrl: './recruiter-options.component.html',
  styleUrls: ['./recruiter-options.component.css']
})
export class RecruiterOptionsComponent implements OnInit {
 
  show = 'showsidebar';
  employeeType:any;
  employeeId:any;
  name:any;
  email:any;
  contactNumber:any;
  gender:any;
  welcomePage:any;
  constructor(private http: HttpClient, private securityService: SecurityService,
    private router: Router) {
      this.welcomePage=true;
      this.employee=localStorage.getItem("employee");
      this.employeeId=localStorage.getItem("employeeId");
      this.name=localStorage.getItem("name");
      this.email=localStorage.getItem("email");
      this.contactNumber=localStorage.getItem("contactNumber");
      this.gender=localStorage.getItem("gender");
      this.employeeType=localStorage.getItem("employeeType");
     }
  
  ngOnInit(): void {
  
  }
  employee:any;
  view_slots : boolean =false;
  view_applicants : boolean =false;
  schedule_interview : boolean=false;
  jobs : boolean=false;
  feedback : boolean =false;
  view_profile : boolean=false;
  showWelcomePage(){
    this.welcomePage=true;
    this.view_profile=false;
    this.feedback=false;
    this.jobs=false;
    this.view_applicants=false;
    this.view_slots=false;
    this.schedule_interview=false;

  }
  myProfile(){
    this.view_profile=true;
    this.feedback=false;
    this.jobs=false;
    this.view_applicants=false;
    this.view_slots=false;
    this.schedule_interview=false;
    this.welcomePage=false;
  }
  viewfeedback(){
    this.view_profile=false;
    this.feedback=true;
    this.jobs=false;
    this.view_applicants=false;
    this.view_slots=false;
    this.schedule_interview=false;
    this.welcomePage=false;
  }
  viewJobs(){
    this.view_profile=false;
    this.feedback=false;
    this.jobs=true;
    this.view_applicants=false;
    this.view_slots=false;
    this.schedule_interview=false;
    this.welcomePage=false;
  }
  viewApplicants(){
    this.view_profile=false;
    this.feedback=false;
    this.jobs=false;
    this.view_applicants=true;
    this.view_slots=false;
    this.schedule_interview=false;
    this.welcomePage=false;
  }
  viewSlots(){
    this.view_profile=false;
    this.feedback=false;
    this.jobs=false;
    this.view_slots=true;
    this.view_applicants=false;
    this.schedule_interview=false;
    this.welcomePage=false;
  }
  scheduleInterview(){
    this.view_profile=false;
    this.feedback=false;
    this.jobs=false;
    this.schedule_interview=true;
    this.view_slots=false;
    this.view_applicants=false;
    this.welcomePage=false;
  }
  getfeedback(){
    return this.feedback;
  }
  getview_slots(){
    return this.view_slots;
  }
  getview_applicants(){
    return this.view_applicants;
  }
  getsceduleinterview(){
    return this.schedule_interview;
  }
  getjobs(){
    return this.jobs;
  }

  logout(){
    this.securityService.removeToken();
    this.securityService.logout();
    this.router.navigate(['/login']).then();
  }


}
