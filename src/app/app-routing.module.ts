import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'gestionePop', loadChildren: () => import('./features/details/details.module').then(m => m.DetailsModule) },
  { path: 'preferiti', loadChildren: () => import('./features/preferred/preferred.module').then(m => m.PreferredModule) },
  { path: 'aggiungiPop', loadChildren: () => import('./features/upsert/upsert.module').then(m => m.UpsertModule) },
  { path: 'modificaPop', loadChildren: () => import('./features/update-pop/update-pop.module').then(m => m.UpdatePopModule) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
