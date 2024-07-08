import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { TopoFranquiciasComponent } from './topo-franquicias/topo-franquicias.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'products', pathMatch: 'full'
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'franquicias',component: TopoFranquiciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
