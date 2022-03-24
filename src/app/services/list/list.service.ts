import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokimon } from 'src/app/models/polkimon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiBase: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get(this.apiBase + '/pokimon?limit=151');
  }
}
