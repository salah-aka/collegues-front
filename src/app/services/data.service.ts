import { Injectable } from '@angular/core';
import {listeMatricule} from '../mock/matricules.mock';
import {collegueMock} from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  rechercherParNom(nom: string): string[]  {
    return listeMatricule;
     }
    recupererCollegueCourant(): Collegue {
    return collegueMock;
  }
}
