import { Component, OnInit } from '@angular/core';

import { ScheduledInterviews } from 'src/app/entities/scheduled-interviews';
import { ScheduledInterviewService } from 'src/app/services/scheduled-interview.service';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent implements OnInit {
  interview: ScheduledInterviews = new ScheduledInterviews();
  public errormsg: any;
  constructor(private InterviewService: ScheduledInterviewService) { }

  ngOnInit(): void {
  }
  validate() {
    if (this.interview.candidateId == null || this.interview.empId == null)
      return false;
    return true;
  }
  addinterview() {
    this.interview.round = "R1";
    if (this.interview.candidateId == null || this.interview.empId == null || this.interview.date == null || this.interview.time == null) {
      window.prompt("Please Fill Out All The Fields");
      return;
    }
    /*
    if(this.InterviewService.isPresent(this.interview.candidateId))
    {
    window.prompt("Candidate has already alloted slot!");
    return;
    }
    */
    //window.prompt("Slot Booked Sucessfully!");
    const app = document.getElementById("show_success");

    const p = document.createElement("h2");

    p.textContent = "Slot Added Successfully!";

    app?.appendChild(p);
    this.InterviewService.addScheduledinterviews(this.interview).subscribe(error => this.errormsg = error);
  }

}
