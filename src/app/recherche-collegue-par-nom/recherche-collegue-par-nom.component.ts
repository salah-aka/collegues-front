import { Component, OnInit } from '@angular/core';
import {listeMatricule} from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  public affichageListe = false;
  public listeMatri = listeMatricule;

  constructor() { }

  afficherListe(){
    this.affichageListe = true;
  }

  ngOnInit(): void {
  }

}
