import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferredRoutingModule } from './preferred-routing.module';
import { PreferredComponent } from './preferred.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    PreferredComponent
  ],
    imports: [
        CommonModule,
        PreferredRoutingModule,
        SharedModule,
        RouterModule,
        MatCardModule
    ]
})
export class PreferredModule { }
