import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceComponent } from './price.component';

const routes: Routes = [
  {
    path: '',
    component: PriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceRoutingModule { }
