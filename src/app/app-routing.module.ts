import { SlotbookComponent } from './panelist/slotbook/slotbook.component';
import { ViewscheduledinterviewComponent } from './panelist/viewscheduledinterview/viewscheduledinterview.component';
import { ViewprofileComponent } from './panelist/viewprofile/viewprofile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";
import {CallbackComponent} from "./callback/callback.component";
import { ViewskillComponent } from './panelist/viewskill/viewskill.component';
import { CandidateFeedbackComponent } from './panelist/candidate-feedback/candidate-feedback.component';
import { AppComponent } from './app.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { PanelistViewComponent } from './panelist-view/panelist-view.component';
import { RecruiterOptionsComponent } from './components/recruiter-options/recruiter-options.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
//import { IncentiveComponent } from './panelist/incentive/incentive.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'callback', component: CallbackComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'panelist/viewprofile',component: ViewprofileComponent, canActivate: [AuthGuard]},
  {path:'panelist/viewscheduledinterview',component: ViewscheduledinterviewComponent,canActivate: [AuthGuard]},
  {path:'panelist/slotbook',component: SlotbookComponent ,canActivate: [AuthGuard]},
  {path:'panelist/viewskill',component: ViewskillComponent, canActivate: [AuthGuard]},
  {path:'panelist/candidateFeedback',component:CandidateFeedbackComponent, canActivate:[AuthGuard]},
  // {path:'recruiter',component:RecruiterComponent, canActivate:[AuthGuard]},
  {path:'recruiter',component: RecruiterOptionsComponent , canActivate:[AuthGuard]},
  {path:'panelist',component:PanelistViewComponent, canActivate:[AuthGuard]},
  {path:'invalid', component:InvalidPageComponent , canActivate:[AuthGuard]}
  // {path:'incentive', component: IncentiveComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
