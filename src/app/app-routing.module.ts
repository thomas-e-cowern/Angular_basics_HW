import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewoCompComponent } from './newo-comp/newo-comp.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { DefaultComponentComponent } from './default-component/default-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DefaultComponentComponent },
  { path: 'newo-comp', component: NewoCompComponent },
  { path: 'list-component', component: ListComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  
  exports: [RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }
