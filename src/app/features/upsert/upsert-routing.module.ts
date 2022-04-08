import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpsertComponent} from "./upsert.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: UpsertComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpsertRoutingModule { }
