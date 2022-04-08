import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {favoritePopsDB, POPS} from "../../core/layout/store/pop.DB";
import {Pop} from "../../shared/model/pop.interface";

@Component({
  selector: 'app-popList',
  templateUrl: './popList.component.html',
  styleUrls: ['./popList.component.scss']
})
export class PopListComponent implements OnInit{

  pops: Pop[]  = POPS;

  displayedColumns: string[] = ['eroe','abilita', 'dataUscita', 'potenza', 'preferito','view', 'delete'];


  constructor() {


  }

  ngOnInit(): void {
  }



  // add pop to favoritePopDB if not present set pop to favorite otherwise remove it and set the pop to not favorite
  changeFavorite(pop: Pop) {
    if (favoritePopsDB.find(p => p.id === pop.id)) {
      pop.preferito = false;
      this.deletePopFromFavorite(pop);
    } else {
      pop.preferito = true;
      favoritePopsDB.push(pop);

    }
  }


  //delete pop from favoritePopDB
  deletePopFromFavorite(pop: Pop) {
    const index = favoritePopsDB.findIndex(p => p.id === pop.id);
    favoritePopsDB.splice(index, 1);
  }

  //delete pop from list of pops
  deletePop(pop: Pop) {
    const index = this.pops?.findIndex(p => p.id === pop.id);
    this.pops?.splice(index, 1);
    this.pops = this.pops?.filter(p => p.id !== pop.id); // delete pop from list of pops
    
    //
    //delete pop from favoritePopDB if present
    if (favoritePopsDB.find(p => p.id === pop.id)) {
      this.deletePopFromFavorite(pop);
    }


  }




}

