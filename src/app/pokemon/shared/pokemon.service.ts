import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiPath: string = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get(this.apiPath).pipe(catchError(this.handleError))
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO -> ', error)
    return throwError(error)
  }
}
