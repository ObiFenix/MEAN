import { Component, OnInit } from '@angular/core';
import { QuotesService } from "./quotes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [];
  quote_info : Object
  newquote : Object;

  constructor(private _quotesService : QuotesService ){}

  ngOnInit(){
    this.getQuotesFromService();
    this.newquote = { quote: "", name: "" }
    this.quote_info = { quote: "", name: "" ,id:""}
  }

  getQuotesFromService(){
    let ob = this._quotesService.getQuotes();
    ob.subscribe(data =>{this.quotes = data['quotes']})
  }
  addQuotesThroughService(){
    let ob = this._quotesService.addQuote(this.newquote)
    ob.subscribe(data=>{
      this.getQuotesFromService();
      this.newquote = { quote: "", name: "" };
    })
  }
  deleteQuote(id:string){
    let ob = this._quotesService.deleteQuote({id:id});
    ob.subscribe(data =>{this.getQuotesFromService()})
  }
  getUpdateQuote(id:string){
    let ob = this._quotesService.getUpdateQuote({id:id});
    ob.subscribe(data =>{
      this.quote_info = data
    })
  }
  updateQuotesThroughService(){
    let ob = this._quotesService.updateQuote(this.quote_info);
    ob.subscribe(data =>{
      this.quote_info = { quote: "", name: "" ,id:""};
      this.getQuotesFromService();
    })
  }
}


