import { Component, OnInit } from '@angular/core';
import {Pop} from "../model/pop.interface";
import {favoritePopsDB, POPS} from "../../core/layout/store/pop.DB";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {




  title: string = 'Aggiungi un nuovo eroe';

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];



  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

  upsertModel(popForm: NgForm) {
    POPS.push(
      {
            id: 0,
            eroe: popForm.value['name'],
            abilita:  popForm.value['ability'],
            dataUscita: popForm.value['releaseDate'],
            potenza: popForm.value['power'],
            preferito: popForm.value['favorite'],
      }
    )
      //if favorite is true, add to favorite array
      if(popForm.value['favorite'] == true){
        favoritePopsDB.push(
          {
            id: 0,
            eroe: popForm.value['name'],
            abilita:  popForm.value['ability'].submitted,
            dataUscita: popForm.value['releaseDate'],
            potenza: popForm.value['power'],
            preferito: popForm.value['favorite'],
          }
        )
      }
  }
}
