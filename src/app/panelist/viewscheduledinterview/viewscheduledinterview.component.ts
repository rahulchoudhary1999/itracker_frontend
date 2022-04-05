import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-viewscheduledinterview',
  templateUrl: './viewscheduledinterview.component.html',
  styleUrls: ['./viewscheduledinterview.component.scss']
})

export class ViewscheduledinterviewComponent implements  OnInit{

  displayedColumns: string[] = [ 'date', 'time','round', 'candidateId'];
  dataSource1!:MatTableDataSource<any>;
  dataSource2!:MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private employeeService:EmployeeService){}

  ngOnInit() {
    this.employeeService.getOnGoingScheduledInterviewById()
    .subscribe(
      (response:any)=>{
        this.dataSource1=new MatTableDataSource(response);
        this.dataSource1.paginator=this.paginator;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );

    this.employeeService.getCompletedScheduledInterviewById()
    .subscribe(
      (response:any)=>{
        this.dataSource2=new MatTableDataSource(response);
        this.dataSource2.paginator=this.paginator;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
    
  
  }
 
 
}

var ELEMENT_DATA:any;


