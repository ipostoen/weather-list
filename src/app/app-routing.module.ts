import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitysListComponent } from './components/citys-list/citys-list.component';

const routes: Routes = [
  { path: '', component: CitysListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
