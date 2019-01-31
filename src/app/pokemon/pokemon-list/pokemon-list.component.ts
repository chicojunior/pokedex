import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(private _service: PokemonService) { }

  ngOnInit() {
    this._service
      .getAll()
      .subscribe(
        res => console.log(res),
        err => console.error(err)
      )
  }

}
