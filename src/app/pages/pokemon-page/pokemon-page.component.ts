import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  pokemonList: any[] = [];
  constructor(private pokeService: PokemonService, public dataService:DataService, private router: Router) { };

  ngOnInit(): void {
    this.loadPokemon();
  }

  async loadPokemon() {
    try {
      const result: any = await this.pokeService.getMultiplePokemon();
            

      result.results.forEach(async (result: { url: any; }) => {
        const pokemon = await this.pokeService.getPokemonByUrl(result.url);
            this.pokemonList.push(pokemon);       
            this.pokemonList.sort(function(a,b) {return a.id - b.id});
      });      
    } catch (e) {
      console.log(e);

    }finally{
    }
  }

  handleCardClick(pokemon:any){
    this.dataService.selectedPokemon = pokemon;
    this.router.navigate(["/pokemon",pokemon.id])    
  }
}
