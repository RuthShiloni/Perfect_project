import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../Classes/ShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  basicUrl : string ="https://localhost:44337/api/ShoppingCart/"
  
  UnregisterUserCart !: ShoppingCart[]


  constructor(private http : HttpClient) { }
  
  public AddCart(newCart : ShoppingCart) : Observable<any>{
    return this.http.post<any>(this.basicUrl+"addShoppingCart" , newCart)
  }
  public DeleteCart(id : number):Observable<any>{
    return this.http.delete<any>(this.basicUrl+`deleteShoppingCart/${id}`)
  }
  
  public AddToUnRegisterUserCart(newCart : ShoppingCart){
    this.UnregisterUserCart.push(newCart)
  }

}
