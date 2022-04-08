import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpsertRoutingModule } from './upsert-routing.module';
import { UpsertComponent } from './upsert.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    UpsertComponent
  ],
    imports: [
        CommonModule,
        UpsertRoutingModule,
        SharedModule
    ]
})
export class UpsertModule { }
