import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  
  cartList: Product[] = [];

  constructor(private cart: ProductCartService) {
    cart.cartList.subscribe((c)=> this.cartList = c)
  }
}
