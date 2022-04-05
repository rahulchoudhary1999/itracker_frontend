import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
// import { EditprofileComponent } from './editprofile/editprofile.component';
// import { ViewskillComponent } from './viewskill/viewskill.component';
import { ViewscheduledinterviewComponent } from './viewscheduledinterview/viewscheduledinterview.component';
import { SlotbookComponent } from './slotbook/slotbook.component';
// import { WelcomeComponent } from './welcome/welcome.component';


import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
// import { MatFormFieldControl } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewskillComponent } from './viewskill/viewskill.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CandidateFeedbackComponent } from './candidate-feedback/candidate-feedback.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { IncentiveComponent } from './incentive/incentive.component';
@NgModule({
  declarations: [
    ViewprofileComponent,
    // EditprofileComponent,
    ViewscheduledinterviewComponent,
    SlotbookComponent,
    ViewskillComponent,
    WelcomeComponent,
    CandidateFeedbackComponent,
    IncentiveComponent

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule
  ],
  exports:[
    ViewprofileComponent,
    // EditprofileComponent,
    ViewskillComponent,
    ViewscheduledinterviewComponent,
    SlotbookComponent,
    WelcomeComponent,
    CandidateFeedbackComponent,
    IncentiveComponent
    // WelcomeComponent
  ]
})
export class PanelistModule { }
