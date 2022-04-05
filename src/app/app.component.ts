import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SecurityService } from './security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui';
  page:any;
  constructor(public securityService: SecurityService) {
    // console.log("Security Service :"+securityService.isAuthenticated)
    // this.page=homeComponent.checkForEmployee();
    }

    ngOnInit(): void {
      // this.page=localStorage.getItem("page");
      // console.log("abc :"+localStorage.getItem("page"));
    }

}
   

  

  


  

