import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../data/User";
import {Observable} from "rxjs/internal/Observable";
import {Task} from "../data/Task";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private customersUrl = 'http://192.168.1.67:8080/';
  constructor(private httpClient: HttpClient) { }

  getTask(user: User):  Observable<any>  {
    return this.httpClient.get(this.customersUrl + "getTask/" + user.username, httpOptions);
  }

  getTasks(): Observable<any> {
    return this.httpClient.get(this.customersUrl + "getFreeTask" , httpOptions);
  }

  getFinishedTasks(user: User): Observable<any> {
    return this.httpClient.get(this.customersUrl + "getFinishedTask/"  + user.username, httpOptions);
  }

  setDoneTask(task: Task): Observable<any> {
    return this.httpClient.post(this.customersUrl + 'setDoneTask', task, httpOptions);
  }

  selectTask(task: Task, user: User): Observable<any> {
    return this.httpClient.post(this.customersUrl + 'selectTask/' + user.username, task, httpOptions);
  }

  newTask(task: Task, user: User): Observable<any> {
    return this.httpClient.post(this.customersUrl + 'newTask/' + user.username, task, httpOptions);
  }

}
