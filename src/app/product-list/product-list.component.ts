import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';
import { Observable } from 'rxjs';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [
    {
      name:"Chipa",
      type:"Salado",
      price:4500,
      stock:10,
      image:"assets/img/chipa.png",
      quantity: 0
    },
    {
      name: "Berlinesa Dulce de leche",
      type: "Dulce",
      price: 900,
      stock: 0,
      image: "assets/img/berlinesa_ddl.png",
      quantity: 0
    },
    {
      name: "Churro Simple",
      type: "Dulce",
      price: 700,
      stock: 400,
      image: "assets/img/churro_simple.png",
      quantity: 0
    }

  ];
  
  maxReached(m: string) {
    alert(m);
  }

  cartCopy:Product[] = [];

  constructor(private cart: ProductCartService) {
    /*Hago una copia de la lista de productos que tiene el carrito para mantener actualizada la lista del
    componente product-list.component.ts y recorro ambas listas para que al stock de la lista del componente
    se le resten la cantidad que ya se encuentra en el carrito.
    También implemento un get_cartList() con el fin de poder hacer una copia de lo que hay en el carrito.
    Aún no tengo buen manejo de objetos por lo que no sé si es la solución más óptima al problema que tenía
    en el que al pasar a la sección de franquicias y volver al home el componente de product-list 
    se volvía a crear y la lista del componente y la del carrito quedaban desicronizadas dejando la 
    posibilidad de sumar más unidades al carrito a pesar que excedieran el stock inicial.
    */
    this.cartCopy = cart.get_cartList();
    for ( const productList of this.products) {
      for (const productListService of this.cartCopy) {
        if(productList.name==productListService.name){
          productList.stock-=productListService.quantity;
        }
      }
    }
    
  }

  addToCart (product: Product) : void {
   if(product.quantity>0){
     this.cart.addToCart(product);
   }
    product.stock -= product.quantity;
    product.quantity = 0;
  }

}
