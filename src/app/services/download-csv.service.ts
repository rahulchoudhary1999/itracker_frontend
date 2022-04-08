import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadCsvService {

  constructor(private httpclient : HttpClient) { }
  public downloadFile(){
    return this.httpclient.get("http://localhost:8080/getScheduledInterviews");
  }
}
