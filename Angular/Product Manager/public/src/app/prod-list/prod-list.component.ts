import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ArrayType } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  products = [];
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    let ob = this._http.getProducts();
    ob.subscribe(data => {      
      this.products = data['products'];
    })
  }
  deleteProduct(id:String){
    let ob = this._http.deleteProduct(id);
    ob.subscribe(data => {this.getProducts()});
  }
  
}
