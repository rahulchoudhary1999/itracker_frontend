import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackService } from 'src/app/services/feedback.service';
import { CandidateFeedback } from 'src/app/utility/CandidateFeedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {

  allCandidateFeedBack : CandidateFeedback[]
  candidateFeedback : CandidateFeedback[]
  selectedCandidate : CandidateFeedback[]=[]
  p: number = 1;
  candidateName : string

  constructor(private feedbackService : FeedbackService , public snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.getAllFeedbacks();
  }

  getAllFeedbacks()
  {
    this.feedbackService.allFeedbacks().subscribe((data)=>{
      this.allCandidateFeedBack = data;
    })

    return this.feedbackService.allFeedbacks().subscribe((data)=>{
      this.candidateFeedback = data;
    })
  }

 getCandidateName(val: string)
 {
   this.candidateName=val;
   console.log(this.candidateName);
 }


 feedback()
 {
    if(this.candidateName != null && this.candidateName !='')
    {
      
      for(var cf of this.allCandidateFeedBack)
      {   
        if(cf.candidateName.toLowerCase() === this.candidateName.toLowerCase())
        {
          console.log(cf.candidateName); 
          this.selectedCandidate.push(cf);
        }
      }
      console.log(this.selectedCandidate);
      
      if(this.selectedCandidate.length > 0)
      {
        this.candidateFeedback=this.selectedCandidate
        this.selectedCandidate=[];
      }
      else{
        this.openSnackBar("No Records Found","act");
      }
    }
   
 }

 openSnackBar(message: string, action: string) {  
  this.snackBar.open(message, action, {  
     duration: 2000,  
  });  
} 

}
