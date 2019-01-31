import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: any[] = []

  constructor(private _service: PokemonService) { }

  ngOnInit() {
    this._service
      .getAll()
      .subscribe(
        (res: any) => {
          console.log(res)
          if (res.results) {
            this.pokemonList = res.results
          }
        },
        err => console.error(err)
      )
  }

}
