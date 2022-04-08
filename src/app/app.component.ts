import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { SecurityService } from './security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iTracker';
  page:any;
  constructor(private titleService: Title){
    titleService.setTitle("iTracker");
  }

    ngOnInit(): void {
     
    }

}
   

  

  


  

