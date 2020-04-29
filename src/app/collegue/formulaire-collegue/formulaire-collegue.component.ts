import { Component, OnInit } from '@angular/core';
import {CollegueSaisie} from '../../models/CollegueSaisie';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-formulaire-collegue',
  templateUrl: './formulaire-collegue.component.html',
  styleUrls: ['./formulaire-collegue.component.css']
})
export class FormulaireCollegueComponent implements OnInit {

  public collegueSaisie: CollegueSaisie = {};

  constructor(private dataService: DataService) { }

  creerCollegue(){
    this.dataService.creerCollegue(this.collegueSaisie);
  }

  ngOnInit(): void {
  }

}
