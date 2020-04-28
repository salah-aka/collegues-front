import { Injectable } from '@angular/core';
import {collegueMock} from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    /** Subject de collegues */
  private subCollegSelectionne = new Subject<Collegue>();

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): Observable <string[]>  {
    return this.http.get<string[]>(`${environment.url}/collegues?nom=${nom}`);
     }
  recupererCollegueCourant(): Observable<Collegue>{
    return this.subCollegSelectionne.asObservable();
  }
  selectCollegParMatricule(matricule: string): Observable<Collegue>{
    const obsCollegue = this.http.get<Collegue>(`${environment.url}/collegues/${matricule}`);
    obsCollegue.subscribe(collegue => this.subCollegSelectionne.next(collegue));
    return obsCollegue;
  }
}
