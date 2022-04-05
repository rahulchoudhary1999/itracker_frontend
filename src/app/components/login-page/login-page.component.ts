import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  isEmpty(val : string) {
    return val=="";
  }
  func(){
    var check= true;
    return check;
  }
 
}
