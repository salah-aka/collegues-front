import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html'
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules = [];


  constructor(private dataService: DataService) { }

  afficherListe(nomSaisi: string){
    this.dataService.rechercherParNom(nomSaisi)
    .subscribe(
      matri => this.listeMatricules = matri,
      (erreur: HttpErrorResponse) => console.log(`Erreur: ${erreur}`)
    )};

  ngOnInit(): void {
  }

}
