import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {favoritePopsDB, POPS} from "../../core/layout/store/pop.DB";
import {Pop} from "../../shared/model/pop.interface";

@Component({
  selector: 'app-popList',
  templateUrl: './popList.component.html',
  styleUrls: ['./popList.component.scss']
})
export class PopListComponent implements OnInit{

  pops: Pop[] = []; // list of pops
  favoritePops: Pop[] = favoritePopsDB;

  displayedColumns: string[] = ['eroe','abilita', 'dataUscita', 'potenza', 'preferito','view', 'delete'];


  constructor() {
  }

  ngOnInit(): void {
   this.pops = POPS;
  }



  // add pop to favoritePopDB if not present set pop to favorite otherwise remove it and set the pop to not favorite
  changeFavorite(pop: Pop) {
    if (this.favoritePops.find(p => p.id === pop.id)) {
      pop.preferito = false;
      this.deletePopFromFavorite(pop);
    } else {
      pop.preferito = true;
      this.favoritePops.push(pop);

    }
  }


  //delete pop from favoritePopDB
  deletePopFromFavorite(pop: Pop) {
    let index = this.favoritePops.findIndex(p => p.id === pop.id);
    this.favoritePops.splice(index, 1);
  }

  //delete pop from list of pops
  deletePop(pop: Pop) {
    let index = this.pops?.findIndex(p => p.id === pop.id);
    if(index)
      this.pops?.splice(index, 1);
    this.pops = this.pops?.filter(p => p.id !== pop.id); // delete pop from list of pops

    //delete pop from favoritePopDB if present
    if (this.favoritePops.find(p => p.id === pop.id)) {
      this.deletePopFromFavorite(pop);
    }


  }




}

