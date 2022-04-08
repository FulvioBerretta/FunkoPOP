import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopListRoutingModule } from './popList-routing.module';
import { PopListComponent } from './popList.component';
import {RouterModule} from "@angular/router";
import {LayoutModule} from "../../core/layout/layout.module";
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    PopListComponent
  ],
  imports: [
    CommonModule,
    PopListRoutingModule,
    RouterModule,
    LayoutModule,
    MatTableModule,
    SharedModule,

  ]
})
export class PopListModule { }
