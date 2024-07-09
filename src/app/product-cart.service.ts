import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Product[] = [];
  private _cartListSubject: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);
  public cartList: Observable<Product[]> = this._cartListSubject.asObservable();

  constructor() { }
  addToCart(product: Product) {
    //Clonamos objeto product en newCopy
    let newCopy = Object.assign({}, product);
    
    //Se iteran los productos buscando uno que ya se encuentre en el carrito.
    //Si ya está en él, entonces incrementamos la cantidad.
    let alreadyInCart = false;
    this._cartList.forEach((product: Product) =>{
      if(product.name == newCopy.name){
        alreadyInCart=true;
        product.quantity += newCopy.quantity;
      }
    });
    //Si no está en el carrito entonces lo pusheamos
    if (!alreadyInCart)
      this._cartList.push(newCopy);

    this._cartListSubject.next(this._cartList);
    
    /*if(!this._cartList.find((v1) => v1.name == product.name)){
      this._cartList.push({...product});
    }
    else{
      item.quantity += product.quantity;
    }*/
  }
}
