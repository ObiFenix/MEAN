import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private _http: HttpClient) {
    this.getSomeThing();
  }
  getSomeThing() {
    let someObservable = this._http.get('/quotes'); // Create Observable
    someObservable.subscribe(data => console.log(data)
    ); // Subscribe to Observable
  }
}
