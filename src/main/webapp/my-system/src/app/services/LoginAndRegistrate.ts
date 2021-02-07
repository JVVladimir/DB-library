import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {User} from "../data/User";
import {Observable} from "rxjs/internal/Observable";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginAndRegistrate {
  user: User = null;

  private customersUrl = 'http://192.168.1.67:8080/';
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): any {

    console.log(user);
    const opt = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.httpClient.post(this.customersUrl + 'auth/login?username=' + user.username + '&password=' + user.password, null, opt);
  }

  setData(user: User) {
    this.user = user;
  }

  getData(): User {
    let us = this.user;
    return us;
  }

}
