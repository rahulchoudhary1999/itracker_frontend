import { LayoutModule } from "./layout/layout.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatListModule} from '@angular/material/list';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CallbackComponent } from "./callback/callback.component";
import { CandidateListComponent } from "./components/candidate-list/candidate-list.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { InterviewListComponent } from "./components/interview-list/interview-list.component";
import { JobsComponent } from "./components/jobs/jobs.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { RecruiterOptionsComponent } from "./components/recruiter-options/recruiter-options.component";
import { ScheduleInterviewComponent } from "./components/schedule-interview/schedule-interview.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SignupPageComponent } from "./components/signup-page/signup-page.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PanelistViewComponent } from "./panelist-view/panelist-view.component";
import { RecruiterComponent } from "./recruiter/recruiter.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { PanelistModule } from "./panelist/panelist.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSliderModule } from '@angular/material/slider';
import { NgxPaginationModule } from "ngx-pagination";
import { AuthHeaderInterceptor } from "./auth-header.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CallbackComponent,
    RecruiterComponent,
    PanelistViewComponent,
    SidebarComponent,
    HomeComponent,
    AppComponent,
    JobsComponent,
    FeedbackComponent,
    CandidateListComponent,
    LoginPageComponent,
    NavigationBarComponent,
    HomeComponent,
    RecruiterOptionsComponent,
    SignupPageComponent,
    ForgotPasswordComponent,
    InterviewListComponent,
    ScheduleInterviewComponent,
    JobsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    PanelistModule,
     MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
     MatToolbarModule,
     MatIconModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatSliderModule,
    AppRoutingModule,
     HttpClientModule,
     NgxPaginationModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
