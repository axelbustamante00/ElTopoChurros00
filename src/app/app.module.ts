import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { TopoFranquiciasComponent } from './topo-franquicias/topo-franquicias.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ProductsComponent,
    TopoFranquiciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
