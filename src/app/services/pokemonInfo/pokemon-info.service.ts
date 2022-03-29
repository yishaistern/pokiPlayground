import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonInfoService {

  constructor(private http: HttpClient) { }

  getDetails(encounter: string, spices: string, name: string, id: number): Observable<any> {
    return forkJoin([this.getEvaluation(spices, name, id), this.getLocation(encounter, name, id)]);
  }

  getEvaluation(spices: string, name: string, id: number): Observable<any> {
    return this.http.get(spices).pipe(
      mergeMap((data: any) => this.http.get(data.evolution_chain).pipe(
        map((data:any) => {
          const cain = [];
          let current = data.chain;
          while(current) {
            const addObj: any = {};
            addObj.name = current.species.name;
            const splitUrl = current.species.url.split("/").filter((acc: any) => acc);
            addObj.id = Number(splitUrl[splitUrl.length - 1]);
            addObj.isMe = addObj.name === name;
            cain.push(addObj);
            current = current.evolves_to[0]
          }
        })
      )))
  }

  getLocation(encounter: string, name: string, id: number): Observable<any> {
    
  }
}
