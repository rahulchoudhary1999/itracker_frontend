import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/entities/candidate';

import { ScheduledInterviews } from 'src/app/entities/scheduled-interviews';
import { CandidateService } from 'src/app/services/candidate.service';
import { ScheduledInterviewService } from 'src/app/services/scheduled-interview.service';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent implements OnInit {
  interview: ScheduledInterviews = new ScheduledInterviews();
  candidateEmail : string;
  candidate : Candidate;
  
  employeeEmail : string;
  public errormsg: any;
  constructor(private candidateService : CandidateService,private InterviewService: ScheduledInterviewService) { }
  flg : boolean=false;
 list : ScheduledInterviews[] ;
 currentDate=new Date();
 currentTime : Time;
  ngOnInit(): void {
  
  }
 
  validate() {
    if (this.interview.candidateId == null || this.interview.empId == null)
      return false;
    return true;
  }
  checkinterview(){
    console.log(this.interview.candidateId,this.interview.date);
    this.InterviewService.getScheduledinterviewsByCid(this.interview.candidateId).subscribe(
      data => {
        this.list = data;
        for(var sch of this.list){
          if(sch.candidateId == this.interview.candidateId && sch.date == this.interview.date)
          {
          alert("Interview already scheduled!");
          this.flg=true;
          break;
          }
        }
       
      }
    )

  }
  
  addinterview() {
    //this.checkinterview();
    this.interview.round = "R1";
    if (this.candidateEmail == null || this.employeeEmail == null || this.interview.date == null || this.interview.time == null) {
      alert("Please Fill Out All The Fields");
      return;
    }
    
    this.candidateService.getCandidateByEmail(this.candidateEmail).subscribe(
      data => {
        this.candidate=data;
        console.log(this.candidate);
      }
    )
    
   
    return;
    //console.log(typeof(this.candidateEmail));
    this.interview.candidateId=this.candidate.candidateId;
    
    //console.log(this.interview.date,this.interview.time,this.candidateEmail,this.employeeEmail);
    const app = document.getElementById("show_success");

    const p = document.createElement("h2");

    p.textContent = "Slot Added Successfully!";

    app?.appendChild(p);
    this.InterviewService.addScheduledinterviews(this.interview).subscribe(error => this.errormsg = error);
  }

}

function checkinterview() {
  throw new Error('Function not implemented.');
}

