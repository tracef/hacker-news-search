import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full', },
  { path: 'search',  component: SearchComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
