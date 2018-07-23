import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-prod-creation',
  templateUrl: './prod-creation.component.html',
  styleUrls: ['./prod-creation.component.css']
})
export class ProdCreationComponent implements OnInit {
  product: Object;
  error: any;

  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.product = {title:'', price: '', imageURL: ''};
  }

  addProduct(product){
    let ob = this._http.addProduct(this.product);
    ob.subscribe(data => {
    if(data['error']){
      this.error = data['error'];
    }
    else{
      this._router.navigate(['/product'])};
    })

  }
  cancel(){
    this._router.navigate(['/product']);
  }
}
