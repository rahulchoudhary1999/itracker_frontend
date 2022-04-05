import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Incentive } from './incentive';
import { Mailto, NgxMailtoService } from 'ngx-mailto';

@Component({
  selector: 'app-incentive',
  templateUrl: './incentive.component.html',
  styleUrls: ['./incentive.component.scss']
})
export class IncentiveComponent implements OnInit {

  category = ['A','B','C'];
  incentive : Incentive;
  subject: string;
  body: string;

  mailto: Mailto;


  constructor(private mailtoService: NgxMailtoService) { }

  ngOnInit(): void {
  }

  onPassIncentive(IncentiveForm: NgForm):void {
    this.incentive = IncentiveForm.value;
    console.log(this.incentive);

    this.subject = "Incentive Request";
    this.body = `
    Good Day!
    This is ${this.incentive.employeeName} 
    having Employee Id : ${this.incentive.employeeId}
    passing an incentive request for : 
    Category: ${this.incentive.Category}
    Number of Interviews taken : ${this.incentive.Interviews_taken}
    
    Request your kind Approval for the same.

    Regards
    ${this.incentive.employeeName}`;
    console.log(this.body);

      this.mailto ={
      receiver: this.incentive.MailId,
      cc: " ",
      bcc: " ",
      subject: this.subject,
      body: this.body
    }

    this.mailtoService.open(this.mailto)

  }
}

