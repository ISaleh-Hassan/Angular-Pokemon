import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedPokemon:any;
  pokemonList: any[]=[];
}
