import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules = [];


  constructor(private dataService: DataService) { }

  afficherListe(nomSaisi: string){
    this.listeMatricules = this.dataService.rechercherParNom(nomSaisi);
  }

  ngOnInit(): void {
  }

}
