import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService,

  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.getProduct(params.id));
  }
  getProduct(id: String){
    let ob = this._http.getProduct(id);
    ob.subscribe(data => {
      this.product = {title: data['title'], price: data['price'], imageURL: data['imageURL'], _id: data['_id']}
    })
  }
  editProduct(product: Object){
    let ob = this._http.editProduct(this.product);
    ob.subscribe(data => {
      this.getProduct(data['_id']);
    })
  }
  deleteProduct(id:String){
    let ob = this._http.deleteProduct(id);
    ob.subscribe(data => {this.cancel()});
  }
  cancel(){
    this._router.navigate(['/product']);
  }
}
