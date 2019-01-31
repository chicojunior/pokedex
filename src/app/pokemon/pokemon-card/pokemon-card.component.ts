import { Component, OnInit, Input } from '@angular/core';

import { PokemonService } from '../shared/pokemon.service';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonName: string

  pokemon: string
  bgClass: string

  constructor(private _service: PokemonService) { }

  ngOnInit() {
    this._service
      .getByName(this.pokemonName)
      .subscribe(
        (pokemon: any) => {
          this.pokemon = pokemon
          if (pokemon.types.length > 1) {
            this.bgClass = pokemon.types[1].type.name
          } else {
            this.bgClass = pokemon.types[0].type.name
          }
        },
        err => console.error(err)
      )
  }

}
