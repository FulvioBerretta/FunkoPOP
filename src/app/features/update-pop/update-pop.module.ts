import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePopRoutingModule } from './update-pop-routing.module';
import { UpdatePopComponent } from './update-pop.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    UpdatePopComponent
  ],
  imports: [
    CommonModule,
    UpdatePopRoutingModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class UpdatePopModule { }
