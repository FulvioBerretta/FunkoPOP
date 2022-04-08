import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PopListComponent} from "../popList/popList.component";
import {PreferredComponent} from "./preferred.component";

const routes: Routes = [
  { path: '', pathMatch:'full', component: PreferredComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferredRoutingModule { }
