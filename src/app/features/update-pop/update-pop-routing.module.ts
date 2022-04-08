import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsComponent} from "../details/details.component";
import {UpdatePopComponent} from "./update-pop.component";

const routes: Routes = [
  {
    path: '',
    pathMatch:'full', component: UpdatePopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePopRoutingModule { }
