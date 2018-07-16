import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  quotes = [];
  name = [];
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    // this.getTasksFromService();
  }

  getTasksFromService(){
    let ob = this._httpService.getQuotes();
    ob.subscribe(data => {this.quotes = data['quotes']});
  }
  onButtonClickParam(id: any): void { 
    let ob = this._httpService.getInfo({id:id});
    ob.subscribe(data => {this.name = data['name'];
    
    });
  }
}
