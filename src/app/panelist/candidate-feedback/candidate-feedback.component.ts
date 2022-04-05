import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
@Component({
  selector: 'app-candidate-feedback',
  templateUrl: './candidate-feedback.component.html',
  styleUrls: ['./candidate-feedback.component.scss']
})
export class CandidateFeedbackComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  onSubmit(formData:any)
  {
    // console.log(formData);
    this.employeeService.addCandidateFeedback(formData).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  ngOnInit(): void {
  }

}
