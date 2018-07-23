import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getPets(){
    return this._http.get('/pet');
  }
  getPet(id){
    return this._http.get(`/pet/${id}/edit`);
  }
  editPet(pet: Object){
    return this._http.post(`/pet/${pet['_id']}/edit`,pet);
  }
  addPet(pet: Object){
    return this._http.post('pet/add', pet);
  }
  deletePet(id:String){
    return this._http.get(`pet/delete/${id}`);
  }
  likePet(id){
    return this._http.get(`pet/like/${id}`)
  }
}
