import { Component, OnInit } from '@angular/core';
import { ScheduledInterviews } from 'src/app/entities/scheduled-interviews';
import { ScheduledInterviewService } from 'src/app/services/scheduled-interview.service';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {

  interviews : ScheduledInterviews[];
  p : number =1;
  constructor(private interviewService : ScheduledInterviewService) { }

  ngOnInit(): void {
    this.listOfinterviews();
  }
  listOfinterviews() {
    this.interviewService.getScheduledinterviews().subscribe(
      data => {
        this.interviews = data;
      }
    )
  }

 

}
