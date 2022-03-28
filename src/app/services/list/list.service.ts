import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/polkimon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiBase: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get(this.apiBase + 'pokemon?limit=151').pipe(
      map((res: any) => res.results)
    );
  }

  getpokemon(pokemon: Pokemon): Observable<any> {
    return this.http.get(pokemon.url).pipe(
      map((res: any) => res)
    );
  }
}
