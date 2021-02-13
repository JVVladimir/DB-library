import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {User} from "../data/User";
import {Observable} from "rxjs/internal/Observable";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  withCredentials: true
};


@Injectable({
  providedIn: 'root'
})
export class LoginAndRegistrate {
  user: User = null;

  private customersUrl = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): any {
    return this.httpClient.post(this.customersUrl + 'auth/login', user, httpOptions);
  }

  setData(user: User) {
    this.user = user;
  }

  getData(): User {
    let us = this.user;
    return us;
  }

}
