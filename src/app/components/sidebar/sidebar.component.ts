import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  showFiller = false;
  ngOnInit(): void {
  }
  view_slots : boolean =false;
  view_applicants : boolean =false;
  schedule_interview : boolean=false;
 
  viewApplicants(){
    this.view_applicants=true;
    this.view_slots=false;
    this.schedule_interview=false;
  }
  viewSlots(){
    this.view_slots=true;
    this.view_applicants=false;
    this.schedule_interview=false;
  }
  scheduleInterview(){
    this.schedule_interview=true;
    this.view_slots=false;
    this.view_applicants=false;
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

}
