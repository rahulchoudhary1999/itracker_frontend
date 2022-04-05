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
  candidateId : string

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

 getCandidateId(val: string)
 {
   this.candidateId=val;
   console.log(this.candidateId);
 }


 idFeedback()
 {
    if(this.candidateId != null && this.candidateId !='')
    {
      
      for(var cf of this.allCandidateFeedBack)
      {   
        if(cf.candidateId === parseInt(this.candidateId))
        {
          console.log(cf.candidateId); 
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
        this.openSnackBar("Invalid Candidate Id","act");
      }
    }
   
 }

 openSnackBar(message: string, action: string) {  
  this.snackBar.open(message, action, {  
     duration: 2000,  
  });  
} 

}
