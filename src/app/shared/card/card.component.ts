import {Component, Input, OnInit} from '@angular/core';
import {Pop} from "../model/pop.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pop: Pop | undefined;
  @Input() img: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
