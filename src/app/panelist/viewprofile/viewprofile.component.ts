import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {

  employees:any;
  employee:any;

  //Injecting employee Service 
  constructor(private employeeService:EmployeeService){}

  
  ngOnInit() {
  //   this.getEmployees();
  //  this.employees="Welcome"
  //  this.employees=this.getEmployees();
    this.employee=this.getEmployeeById();
  }
  getEmployeeById(): any {
    this.employeeService.getEmployeeById().subscribe(
      (response:any)=>{
        this.employee=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }


  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response:any)=>{
        this.employees=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

}
