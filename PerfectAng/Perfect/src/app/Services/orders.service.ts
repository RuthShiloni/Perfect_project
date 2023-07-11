import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Classes/Order';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

   private basicUrl : string = "https://localhost:44337/api/Orders/"

  constructor(private http : HttpClient , private userServ : UsersService) { }

  public newOrder : Order = new Order(0)

  public AddNewOrder() : Observable<Order>{
    this.newOrder.date=new Date()
    this.newOrder.delivered = false
    if(this.userServ.GetCurrentUser() != null)
    this.newOrder.userId = this.userServ.GetCurrentUser().id
    else 
    this.newOrder.userId = 1409
    return this.http.post<Order>(this.basicUrl + `addOrder` , this.newOrder)
  }

  public GetAllOrdersByUserId(id : number) : Observable<Order[]>{
     return this.http.get<Order[]>(this.basicUrl + `getOrdersByUserId/${id}`)
  }
}
