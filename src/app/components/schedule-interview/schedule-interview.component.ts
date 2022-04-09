import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import { EmployeeService } from 'src/app/employee.service';
import { Candidate } from 'src/app/entities/candidate';
import { EmployeeService} from 'src/app/services/employee.service';
import { ScheduledInterviews } from 'src/app/entities/scheduled-interviews';
import { CandidateService } from 'src/app/services/candidate.service';
import { ScheduledInterviewService } from 'src/app/services/scheduled-interview.service';
import { Employee } from 'src/app/entities/employee';
import { SlotList } from 'src/app/entities/slot-list';
import { SlotListService } from 'src/app/services/slot-list.service';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent implements OnInit {
  interview: ScheduledInterviews = new ScheduledInterviews();
  candidateEmail : string;
  candidate : Candidate;
  candidateId : number;
  employeeId : string;
  slots : SlotList[];
  employee : Employee;
  employeeEmail : string;
  public errormsg: any;
  constructor(private slotsService : SlotListService,private employeeservice : EmployeeService,private candidateService : CandidateService,private InterviewService: ScheduledInterviewService) { }
  flg : boolean=false;
 list : ScheduledInterviews[] ;
 currentDate=new Date();
 currentTime : Time;
  ngOnInit(): void {
  
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
  getCandidate(){
    this.candidateService.getCandidateByEmail(this.candidateEmail).subscribe(
      data => {
        this.candidate=data;
        if(this.candidate == null)
        {
          alert("Candidate With This Email Doesn't Exist");
          return;
        }
        //checking if this selected candidate has already scheduled interview in same day or not.
        this.InterviewService.getScheduledinterviewsByCid(this.candidate.candidateID).subscribe(
          data => {
            this.list = data;
            
            for(var sch of this.list){
              if(sch.candidateId == this.candidate.candidateID && sch.date == this.interview.date)
              {
                this.flg=true;
                alert("Selected Applicant Has Already Scheduled A Slot On Selected Day.")
              break;
              }
            }
            this.interview.candidateId=this.candidate.candidateID;
        this.candidateId=this.interview.candidateId;
        if(this.flg==false)
        this.getEmployee();
           
          }
        )
        
      }
    )

  }
  getEmployee(){
    this.employeeservice.getEmployeeByEmail(this.employeeEmail).subscribe(
      data=>{
        this.employee=data;
        if(this.employee == null || this.employee.employeeType== "recruiter")
        {
          alert("Panelist With This Email Doesn't Exist");
          return;
        }
        this.interview.empId=this.employee.empId;
        this.employeeId=this.interview.empId;
        console.log("in",this.interview.empId);
        if(this.flg == false)
        this.addinterview();
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
        
        this.interview.candidateId=this.candidate.candidateID;
        this.candidateId=this.interview.candidateId;
        console.log("in",this.interview.candidateId);
      }
    )
    this.employeeservice.getEmployeeByEmail(this.employeeEmail).subscribe(
      data=>{
        this.employee=data;
       
        this.interview.empId=this.employee.empId;
        this.employeeId=this.interview.empId;
        console.log("in",this.interview.empId);
      }
    )
    /*
    this.slotsService.getSlotList().subscribe(
      data => {
        this.slots = data;
        //code here
        for(var sch of this.slots){
          if(sch.candidateEmail == this.candidateEmail)
          {
            this.flg=true;
          alert("Interview already scheduled!");
          
          return;
          }
        }
      }
    )
    */
   
    //console.log(this.interview.date,this.interview.time,this.candidateEmail,this.employeeEmail);
    const app = document.getElementById("show_success");

    const p = document.createElement("h2");
    
    p.textContent = "Slot Added Successfully!";
      if(this.flg==false)
    app?.appendChild(p);
    
    this.InterviewService.addScheduledinterviews(this.interview).subscribe(error => this.errormsg = error);
  }

}

function checkinterview() {
  throw new Error('Function not implemented.');
}

