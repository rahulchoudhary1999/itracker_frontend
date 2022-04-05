import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {SecurityService} from "../security.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit {

  name;
  email;
  photo;
  data:any;
  constructor(private http: HttpClient, private securityService: SecurityService,
              private router: Router) {
                
                this.checkForEmployee();
  }

  ngOnInit(): void {
    
    this.getUserInfo().subscribe(data => {
      console.log(data)
      // this.name = data["Profile"]["name"]
      // this.email= data["Profile"]["email"]
      // this.photoUrl = data.photoUrl

     
      
      

      
    }
    );
  }

  checkForEmployee(){
 
    this.getUserInfo().subscribe(data => {
      console.log("Data :"+data);
      // this.name = data["Profile"]["name"]
      // this.email= data["Profile"]["email"]
      // this.photoUrl = data.photoUrl
      localStorage.setItem("employee",data["employee"]);
      localStorage.setItem("employeeId",data["employee"]["employeeId"]);
      localStorage.setItem("employeeType",data["employee"]["employeeType"]);
      if(localStorage.getItem("employeeType")=="recruiter")
      {
       this.router.navigate(['/recruiter']);
      //  return "recruiter";
      }
      else if(localStorage.getItem("employeeType")=="panelist")
      {
        this.router.navigate(['/panelist']);
        // alert("Invalid User");
        // return "invalid";
      }
    }
    );
  
   // console.log("Work :"+localStorage.getItem("page"));

  }
 
  


  getUserInfo(): Observable<any> {
    return this.http.get(environment.baseUrl + '/v1/home');
    
  }

  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }

  // logout()
  // {
  //   this.securityService.logout().subscribe(() => {
  //     this.securityService.removeToken();
  //     this.router.navigate(['/login']);
  //   });
  // }

  logout()
  {
      this.securityService.removeToken();
      this.securityService.logout();
      this.router.navigate(['/login']).then();
    
  }
}
