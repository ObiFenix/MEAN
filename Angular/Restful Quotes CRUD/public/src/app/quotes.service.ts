import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private _http : HttpClient) { }
  getQuotes() {
    return this._http.get('/quotes')
  }
  addQuote(newquote) {    
    return this._http.post('/new',newquote)
  }
  deleteQuote(id) {
    return this._http.post('/delete',id)
  }
  getUpdateQuote(id) {    
    return this._http.post('/quote_info',id)
  }
  updateQuote(quote_info) {
    return this._http.post('/update',quote_info)
  }
}
