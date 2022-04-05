import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobsService } from 'src/app/services/jobs.service';
import { JobApplication } from 'src/app/utility/JobApplication';


@Component({
  selector: 'app-job',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobApplication: JobApplication[];
  selectedJobs: JobApplication[] = [];
  Jobs: JobApplication[];
  jobID: string;
  role: string;
  p: number = 1;

  constructor(private jobsService: JobsService , public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllJobs();
    this.Jobs = this.jobApplication;
  }

  selectChangeHandler(event: any) {
    this.role = event.target.value;
    console.log(this.role);
  }

  getAllJobs() {

    this.jobsService.allJobs().subscribe(data => {
      this.Jobs = data;
    });

    return this.jobsService.allJobs().subscribe(data => {
      this.jobApplication = data;
    })
  }

  getJobId(value: string) {
    this.jobID = value;
  }

  searchBtn() {
    console.log(this.Jobs);
    console.log("search button pressed");
    console.log(this.jobID);
    console.log(this.role);
    if (this.jobID != undefined && this.jobID != '') {
      for (var ja of this.Jobs) {
        if (ja.jobId === parseInt(this.jobID)) {
          this.selectedJobs.push(ja);
          break;
        }
      }
      if(this.selectedJobs.length>0)
      {
      this.jobApplication = this.selectedJobs;  
      this.selectedJobs = [];
      }
      else
      {
        this.openSnackBar("Invalid Job ID" , "act");
      }
      console.log(this.selectedJobs);

    }
    else if (this.role != undefined) {
      for (var ja of this.Jobs) {

        if (this.role === "All") {
          this.selectedJobs = this.Jobs;
          break;
        }
        if (ja.role === this.role) {
          this.selectedJobs.push(ja);
        }
      }
      this.jobApplication = this.selectedJobs;
      this.selectedJobs = [];
    }
    else {
      this.jobApplication = this.Jobs;
    }
  }

  openSnackBar(message: string, action: string) {  
    this.snackBar.open(message, action, {  
       duration: 2000,  
    });  
  } 

}


