import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../Classes/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 basicUrl : string = "https://localhost:44337/api/Products/"
  constructor(private http : HttpClient) { }
  public getAllProduct() : Observable< Product[] > {
    return this.http.get<any>(this.basicUrl + "getAllProduct")
  } 

  public getProductById(id : number) : Observable<Product> {
    return this.http.get<any>(this.basicUrl + "getProductById/" + id)
  }
}
