import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalProduct } from '../Classes/PersonalProduct';
import { ShoppingCart } from '../Classes/ShoppingCart';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  basicUrl : string ="https://localhost:44337/api/ShoppingCart/"
  
  private UnregisterUserCart : ShoppingCart[] = []
  private add !: boolean

  //personal Product
  // UnregisterUser : PersonalProduct[] = []

  constructor(private http : HttpClient , private userServ : UsersService) { }
  
  public AddCart(newCart : ShoppingCart) : Observable<any>{
    return this.http.post<any>(this.basicUrl+"addShoppingCart" , newCart)
  }

// //personal Product
//   public AddPersonalProduct(newPersonalProduct : PersonalProduct) : Observable<any>{
//     return this.http.post<any>(this.basicUrl+"addShoppingCart" , newPersonalProduct)
//   }

  public DeleteCart(id : number):Observable<any>{
    return this.http.delete<any>(this.basicUrl+`deleteShoppingCart/${id}`)
  }
  public GetAllCartByUserId(userid : number) : Observable<ShoppingCart[]>{
  return this.http.get<ShoppingCart[]>(this.basicUrl + `GetAllCartByUserId/${userid}`)
  }
  public UpdateCart(id : number , sp : ShoppingCart) : Observable<boolean>{
    return this.http.put<boolean>(this.basicUrl + `UpdateShoppingCart/${id}` , sp )
  }
  public AddToUnRegisterUserCart(newCart : ShoppingCart){
    this.add = false
    this.UnregisterUserCart.forEach(element => {
      if(element.productId == newCart.productId && element.idSize == newCart.idSize){
        element.quantity +=1
        this.add = true
      }     
    });  
    if(this.add == false)
      this.UnregisterUserCart.push(newCart)
  }
  public DeleteFromUnRegisterUserCart(pId : number , idSize : number){
  
    for (let i = 0; i < this.UnregisterUserCart.length; i++) {
      if(this.UnregisterUserCart[i].productId == pId && this.UnregisterUserCart[i].idSize == idSize)
        this.UnregisterUserCart.splice(i, 1)
    }
    return this.UnregisterUserCart
  }
  public UpdateUnRegisterCart(shc : ShoppingCart , id : number){
  const index = this.UnregisterUserCart.findIndex(x => x.productId == id)
  this.UnregisterUserCart[index] = shc
  }
  public GetUnRegisterCart() : ShoppingCart[]{
   return this.UnregisterUserCart
  }
  
}
