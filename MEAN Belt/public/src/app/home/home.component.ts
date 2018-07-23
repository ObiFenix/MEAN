import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: Object;

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getPets();
  }
  getPets(){
    let ob = this._http.getPets();
    ob.subscribe(data => {
    this.pets = data['pets'];
    })
  }
}
