import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import {RouterModule} from "@angular/router";
import {LayoutModule} from "../../core/layout/layout.module";
import {MatTableModule} from "@angular/material/table";
import {StrengthPipe} from "../../shared/model/strength.pipe";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    RouterModule,
    LayoutModule,
    MatTableModule,
    SharedModule,

  ]
})
export class DetailsModule { }
