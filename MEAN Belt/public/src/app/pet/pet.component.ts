import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
pet: Object;
likes: Number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService,
  ) { }

  ngOnInit() {
    this.pet = {_id: '' ,name: '' , type: '', desc: '',skills:['','',''],likes:''};
    this._route.params.subscribe((params: Params) => this.getPet(params.id))
  }
  getPet(id: String){
    let ob = this._http.getPet(id);
    ob.subscribe(data => {
      this.pet = {_id: data['_id'] ,name: data['name'] , type: data['type'], desc: data['desc'],skills:[data['skills'][0],data['skills'][1],data['skills'][2]],likes:data['likes']};
    })
  }
  deletePet(id:String){
    let ob = this._http.deletePet(id);
    ob.subscribe(data => {this.cancel()});
  }
  cancel(){
    this._router.navigate(['/pets']);
  }
  likePet(id){
    let ob = this._http.likePet(id);
    ob.subscribe(data => {this.getPet(data['_id'])});
  }
}
