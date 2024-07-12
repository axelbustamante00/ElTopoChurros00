import { Component, OnDestroy, OnInit} from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {
  cartList$: Product[] = [];
  cartService: ProductCartService;

  constructor(cartService: ProductCartService) {
    this.cartService = cartService;
  }

  private subscription: Subscription = new Subscription;

  ngOnInit(): void {
      this.subscription = this.cartService.cartList.subscribe((data) =>{this.cartList$ = data});
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
 
}
