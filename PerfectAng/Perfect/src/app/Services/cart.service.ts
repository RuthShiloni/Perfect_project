import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
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
  public numItem : number = 0
  cartUpdated: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http : HttpClient , private userServ : UsersService) { }
  
  public AddCart(newCart : ShoppingCart) : Observable<any>{
    this.numItem += newCart.quantity
    this.cartUpdated.emit()
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
      this.numItem += newCart.quantity
    this.cartUpdated.emit()
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
// פונקציה שבזמן לוגין שומרת את מספר הפריטים ב
//sessionstorage 
//כדי שבזמן ריענון לא יעלם
  public SetNumItem(number : number){
    var numberItem = JSON.stringify(number)
    sessionStorage.setItem('numItem' , numberItem)
    this.numItem = number
  }
  public getNumItem(){
    if(this.userServ.GetCurrentUser() != null){
       var str = sessionStorage.getItem('numItem')
       if(str != null)
      this.numItem =JSON.parse(str) 
    }
    return this.numItem
  }
//פונקציות שמרידות ומעלות 1 ממספר הפריטים  ומעדכנות
  public Add1(){
    debugger
    if(this.userServ.GetCurrentUser() != null){
      var numberItem = JSON.stringify(this.numItem+1)
      sessionStorage.setItem('numItem' , numberItem)
    }
    else{
      this.numItem += 1
    }
    this.cartUpdated.emit()
  }
  public Remove1(){
    if(this.userServ.GetCurrentUser() != null){
      var numberItem = JSON.stringify(this.numItem-1)
      sessionStorage.setItem('numItem' , numberItem)
    }
   this.numItem -= 1
   this.cartUpdated.emit()
  }
}
