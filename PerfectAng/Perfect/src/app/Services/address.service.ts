import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../Classes/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  basicUrl : string = "https://localhost:44337/api/Address/"
  constructor(private http : HttpClient) { }

  public AddAddress(add : Address):Observable<boolean>{
    return this.http.post<boolean>(this.basicUrl + "addAddress" , add)
  }

  public UpdateAddress(updateAdd : Address,id : number) : Observable<boolean>{
   return this.http.put<boolean>(this.basicUrl + `updateAddress/${id}` , updateAdd)
  }
  
}
