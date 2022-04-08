import {Component, Input, OnInit} from '@angular/core';
import {Pop} from "../../shared/model/pop.interface";
import {favoritePopsDB} from "../../core/layout/store/pop.DB";

@Component({
  selector: 'app-preferred',
  templateUrl: './preferred.component.html',
  styleUrls: ['./preferred.component.scss']
})
export class PreferredComponent implements OnInit {


  // favoritePops from  parent component
  favoritePops: Pop[] = favoritePopsDB;

  constructor() { }

  ngOnInit(): void {
  }

}
