import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  pet: Object;
  errors: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.getPet(params.id))
  }
  getPet(id: String){
    let ob = this._http.getPet(id);
    ob.subscribe(data => {
      this.pet = {_id: data['_id'] ,name: data['name'] , type: data['type'], desc: data['desc'],skills:[data['skills'][0],data['skills'][1],data['skills'][2]]};
    })
  }
  editPet(product: Object){
    let ob = this._http.editPet(this.pet);
    ob.subscribe(data => {
      if(data['error']){
        this.errors = data['error'];
      }
      else{
        this._router.navigate(['pets',data['_id']]);
      }
    })
  }
  cancel(){
    this._router.navigate(['/pets']);
  }
}
