import { Injectable } from '@angular/core';
import {collegueMock} from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): Observable <string[]>  {
    return this.http.get<string[]>(`${environment.url}/collegues?nom=${nom}`);
     }
    recupererCollegueCourant(): Collegue {
    return collegueMock;
  }
}
