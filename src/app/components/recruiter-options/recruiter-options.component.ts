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
 
  constructor(private http: HttpClient, private securityService: SecurityService,
    private router: Router) { }
  show = 'showsidebar';
  ngOnInit(): void {
  
  }
  view_slots : boolean =false;
  view_applicants : boolean =false;
  schedule_interview : boolean=false;
  jobs : boolean=false;
  feedback : boolean =false;
  viewfeedback(){
    this.feedback=true;
    this.jobs=false;
    this.view_applicants=false;
    this.view_slots=false;
    this.schedule_interview=false;
  }
  viewJobs(){
    this.feedback=false;
    this.jobs=true;
    this.view_applicants=false;
    this.view_slots=false;
    this.schedule_interview=false;
  }
  viewApplicants(){
    this.feedback=false;
    this.jobs=false;
    this.view_applicants=true;
    this.view_slots=false;
    this.schedule_interview=false;
  }
  viewSlots(){
    this.feedback=false;
    this.jobs=false;
    this.view_slots=true;
    this.view_applicants=false;
    this.schedule_interview=false;
  }
  scheduleInterview(){
    this.feedback=false;
    this.jobs=false;
    this.schedule_interview=true;
    this.view_slots=false;
    this.view_applicants=false;
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
