import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PopListComponent} from "../popList/popList.component";

const routes: Routes = [
  { path: 'gestionePop', pathMatch:'full', component: PopListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
