import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsComponent} from "../details/details.component";
import {PreferredComponent} from "./preferred.component";

const routes: Routes = [
  { path: '', pathMatch:'full', component: PreferredComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferredRoutingModule { }
