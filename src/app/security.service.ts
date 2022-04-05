import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  isAuthenticated = false;

  private authorizeEndpoint = '/oauth2/authorization/google'
  private tokenEndpoint = '/login/oauth2/code/google';
  private baseUrl = environment.baseUrl;
  private tokenKey = 'token';

  constructor(private http: HttpClient) {
  }

  login() {
    window.open(this.baseUrl + this.authorizeEndpoint, '_self');
    

  }

  updateToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  fetchToken(code, state): Observable<any> {
    return this.http.get(this.baseUrl + this.tokenEndpoint + '?code=' + code + '&state=' + state);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if(token!=null){
      this.isAuthenticated = true;
    }
    return token != null;
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  logout(): Observable<any> {
    this.isAuthenticated = false;
    return this.http.post(this.baseUrl + '/logout', this.removeToken());
  }
}
