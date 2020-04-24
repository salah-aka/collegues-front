import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from 'src/app/models/Collegue';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() coll: Collegue;

  constructor() { }

  ngOnInit(): void {
  }

}
