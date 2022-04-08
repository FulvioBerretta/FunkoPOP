import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {favoritePopsDB, POPS} from "../../shared/model/pop.DB";
import {Pop} from "../../shared/model/pop.interface";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  favoritePops: Pop[] = favoritePopsDB;
  pops: Pop[] = POPS;

  displayedColumns: string[] = ['eroe','abilita', 'dataUscita', 'potenza', 'preferito','view', 'delete'];


  constructor() { }

  ngOnInit(): void {
    this.favoritePops =  POPS.filter(pop => pop.preferito === true);  // filtro solo i preferiti
  }

  // add pop to favoritePopDB if not present otherwise remove it
  changeFavorite(pop: Pop) {
    if (favoritePopsDB.find(p => p.id === pop.id)) {
      pop.preferito = false;
      this.deletePop(pop);
    } else {
      pop.preferito = true;
      favoritePopsDB.push(pop);
    }
  }

  //delete pop from favoritePopDB with a given id
  deletePop(pop: Pop) {
    this.pops.splice(favoritePopsDB.indexOf(pop), 1);
  }




}

