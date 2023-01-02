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

  public GetAllProduct() : Observable< Product[] > {
    return this.http.get<any>(this.basicUrl + "getAllProduct")
  } 

  public GetProductById(id : number) : Observable<Product> {
    return this.http.get<any>(this.basicUrl + `getProductById/${id}`)
  }
  
  public DeleteProduct(id : number) : Observable<boolean> {
   return this.http.delete<boolean>(this.basicUrl + `deleteProduct/${id}`)
  }
  
  public AddProduct(product : Product) : Observable<boolean> {
   return this.http.post<boolean>(this.basicUrl + "addProduct" , product)
  }

  public UpdateProduct(id : number , product : Product)  : Observable<boolean>{
    return this.http.put<any>(this.basicUrl + `updateProduct/${id}` , product)
  }

  public getProductsByCate(categoryId : number) : Observable<Product[]>{
    return this.http.get<any>(this.basicUrl + `getProductsByCate/${categoryId}`)
  }
}

