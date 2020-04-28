import { Component, OnInit , OnDestroy} from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})
export class CollegueComponent implements OnInit {

  public modification = false;
  coll: Collegue;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.recupererCollegueCourant()
    .subscribe( collegue => { this.coll = collegue;
     }, error => {console.log(`Erreur : ${error}`)})
  }

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


}
