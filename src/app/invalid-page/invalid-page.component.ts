import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-invalid-page',
  templateUrl: './invalid-page.component.html',
  styleUrls: ['./invalid-page.component.scss']
})
export class InvalidPageComponent implements OnInit {

  constructor(private http: HttpClient, private securityService: SecurityService,
    private router: Router) {
      alert("Invalid User");
      this.logout();
     }

  ngOnInit(): void {
  }
  
  logout(){
    this.securityService.removeToken();
    this.securityService.logout();
    this.router.navigate(['/login']).then();
  }

}
