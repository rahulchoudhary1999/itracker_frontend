import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/entities/candidate';
import { CandidateService } from 'src/app/services/candidate.service';
@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates : Candidate[];
  /*
  columnDefs = [
      {headerName : 'Sno',field : 'sno'},
      {headerName : 'Employee Id',field : 'empId'},
      {headerName : 'Candidate Id',field : 'candidateId'},
      {headerName : 'Date',field : 'date'},
      {headerName : 'Time',field : 'time'},
      {headerName : 'Round',field : 'round'}
  ];
  gridOptions = {
    columnDefs:this.columnDefs,
    enableSorting :true,
    enableFilter :true,
    pagination : true
  };
  fetch('http://localhost:8080/recruiter-options/getScheduledInterviews').then(function(response) {
    return response.json();
  }).then(function(data){
    const colDefs=this.gridOptions.pagination.getColumnDefs();
    colDefs.length=0;
    const keys=Object.keys(data[0])
    keys.forEach(key => colDefs.push({field : key}))
    this.gridOptions.api.setColumnDefs(colDefs);
    this.gridOptions.api.setRowData(data);
  })
  */
  p : number =1;
  constructor(private candidateService : CandidateService) { }

  ngOnInit(): void {
    this.listOfCandidates();
  }
  sc : boolean =false;
  schedule(){
    this.sc=true;
  }
  getschedule(){
    return this.schedule;
  }
  listOfCandidates() {
    this.candidateService.getCandidates().subscribe(
      data => {
        this.candidates = data;
        
      }
    )
  }
}
