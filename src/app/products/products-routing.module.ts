import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
        pathMatch: 'full'
      },
      // {
      //   path: 'price',
      //   loadChildren: () => import('./components/price/price.module').then(m => m.PriceModule),
      //   pathMatch: 'full'
      // },
      {
        path: '**',
        redirectTo: 'product'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
