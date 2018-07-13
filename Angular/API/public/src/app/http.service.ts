import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/51/');
    bulbasaur.subscribe(data => {
      console.log("Pokemon", data)
      let abilityString = data.name + ' ablilities are '
      for(var i=0;i<data.abilities.length;i++){
        abilityString += data.abilities[i].ability.name + ' ';
      }
      console.log(abilityString);
      
    });
    let sharesAbility = this._http.get('https://pokeapi.co/api/v2/ability/159/');
    sharesAbility.subscribe(data => {
      let count = 0
      for(var i=0;i<data.pokemon.length;i++){
        count ++
      }
      console.log(count + ' Pokemon have the ability ' + data.name +'.');
      
    });
  }
}
