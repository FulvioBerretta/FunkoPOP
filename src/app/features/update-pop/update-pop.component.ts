import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-pop',
  templateUrl: './update-pop.component.html',
  styleUrls: ['./update-pop.component.scss']
})
export class UpdatePopComponent implements OnInit {
  isValid: boolean =  false;

  constructor() { }

  ngOnInit(): void {
  }

  myGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    power: new FormControl('', Validators.required),
  });


  updatePop(popForm: NgForm){
    console.log(popForm.value);
  }




}
