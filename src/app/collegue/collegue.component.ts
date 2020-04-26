import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() coll: Collegue;
  modification = false;
  constructor() { }

  nouveauCollegue(){
    console.log('Création d’un nouveau collègue');
  }

  modifier(){
    this.modification = true;
  }

  valider(newEmail, newPhoto){
    this.modification = false;
    this.coll.email = newEmail;
    if (newPhoto.length > 0){
    this.coll.photoUrl = newPhoto;
    }
  }

  ngOnInit(): void {
  }

}
