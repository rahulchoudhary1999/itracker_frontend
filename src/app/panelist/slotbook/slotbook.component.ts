import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import {DataPipe} from '@angular/common';
@Component({
  selector: 'app-slotbook',
  templateUrl: './slotbook.component.html',
  styleUrls: ['./slotbook.component.scss']
})
export class SlotbookComponent implements OnInit {
  displayedColumns: string[] = [ 'date', 'time'];
  dataSource!:MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  time:any
  date:any
  data:any
  response:any
  latestDate:any
  constructor(private employeeService:EmployeeService) {
    this.latestDate=new Date();
   }


  tableLoad():void{
    this.employeeService.getSlotsById()
    .subscribe(
      (response:any)=>{
        this.dataSource=new MatTableDataSource(response);
        this.dataSource.paginator=this.paginator;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
   }

  ngOnInit(): void {
    //console.log("Date picker")
    this.tableLoad();
  }
 

 getData(data:any){
    data.date=JSON.stringify(data.date).substring(1,11);
    data.time=data.time.concat(":00");
    this.data=data;
this.employeeService.addSlot(this.data).subscribe(
  (response:any)=>{
    this.response=response;
    this.tableLoad();
    alert(JSON.stringify(response));
  },
  (error:HttpErrorResponse)=>{
    alert(error.message);
  }
);
  }
 
  // dateChanged(dateObject:any){
  //   // console.log("Time :"+ (this.time).toLocaleString());
  //   //console.log(dateObject.toLocaleDateString());
  //   // console.log(dateObject.toLocaleString());
  //  var stringified = JSON.stringify(dateObject.value);
  //   // console.log(stringified); 
  //  var dob = stringified.substring(1, 11);
  //  this.date=dob;
   
  // }

}
