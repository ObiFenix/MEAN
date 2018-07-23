import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  pet: Object;
  errors: any;

  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.pet = {name:'', type: '', desc: '',skills:['','','']};
  }
  addPet(pet){
    let ob = this._http.addPet(this.pet);
    ob.subscribe(data => {
    if(data['error']){
      console.log(data['error']);
      
      this.errors = data['error'];
    }
    else{
      this._router.navigate(['/pets'])};
    })

  }
  cancel(){
    this._router.navigate(['/pets']);
  }
}
