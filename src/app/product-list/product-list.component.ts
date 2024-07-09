import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';

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

  constructor(private cart: ProductCartService) {
  }

  addToCart (product: Product) : void {
   this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

}
