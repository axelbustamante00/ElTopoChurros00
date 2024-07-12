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
    
    let alreadyInCart = false;

    //Se iteran los productos de la lista del carrito buscando si el objeto recibido ya se encuentra en el carrito.
    //Si ya está en él, entonces incrementamos la cantidad del producto para no tener dos productos del mismo nombre
    //en la lista separados.
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
  }

  get_cartList(){
    return this._cartList;
  }
}
