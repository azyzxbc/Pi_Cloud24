import { Injectable } from '@angular/core';
import {User} from "../Auth/User";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ressource} from "../FrontOffice/Ressource";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl :string = 'http://4.233.22.2:8089/Integration-Springv2/'

  constructor(public http:HttpClient) {

  }
  login(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'login', user);
  }


  signup(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'signup', user);
  }

}
