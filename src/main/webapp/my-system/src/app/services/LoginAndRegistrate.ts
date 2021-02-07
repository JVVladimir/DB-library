import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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

  loginUser(user: User):  Observable<User>  {
    const parm = new HttpParams();
    parm.set('username', user.username);
    parm.set('password', user.password);

    return this.httpClient.post<User>(this.customersUrl + 'auth/login', {
      params: parm
    }, httpOptions);
  }

  setData(user: User) {
    this.user = user;
  }

  getData(): User {
    let us = this.user;
    return us;
  }

}
