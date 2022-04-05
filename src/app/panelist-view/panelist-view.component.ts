import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-panelist-view',
  templateUrl: './panelist-view.component.html',
  styleUrls: ['./panelist-view.component.scss']
})
export class PanelistViewComponent implements OnInit {

  flag:string;
  constructor(private http: HttpClient, private securityService: SecurityService,
    private router: Router) { 
    this.flag="welcome";
  }

  ngOnInit(): void {
  }

  func(val:any):void{
    this.flag=val;
  }

  logout(){
    this.securityService.removeToken();
      this.securityService.logout();
      this.router.navigate(['/login']).then();
  }

}
