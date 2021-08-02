import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '../components/interfaces/fruit.interface';


@Injectable({
  providedIn: 'root'
})
export class FruitListService {

  constructor(
    private http: HttpClient
  ) { }

  getFruitsList( url: string): Observable<Fruit[]>{
    const headers = new HttpHeaders({
      'Authorization' : 'bearer token',
      'Connection' : 'keep-alive'
    });

    return this.http.get<Fruit[]>( 'https://restcountries.eu/rest/v2/name/colombia' )
  }
}
