import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductToOrder } from '../Classes/ProductToOrder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductToOrderService {
  basicUrl : string = "https://localhost:44337/api/ProductToOrder/"
  constructor(private http : HttpClient) { }

public GetAllProductToOrder():Observable <ProductToOrder[]>{
return this.http.get<ProductToOrder[]>(`${this.basicUrl}getAllProductToOrder`);
}

public AddProductToOrder(productToOrder:ProductToOrder):Observable<boolean>{
  return this.http.post<boolean>(this.basicUrl+"addProductToOrder",productToOrder);
}

public DeleteProductToOrder(id: number):Observable<boolean>{
  return this.http.delete<boolean>(`${this.basicUrl}deleteProductToOrder`)
}


public GetProductToOrderById(id:number):Observable<ProductToOrder>{
  return this.http.get<ProductToOrder>(this.basicUrl+`getProductToOrderById/${id}`)
}



public UpdateProductToOrder(id:number):Observable <ProductToOrder>{
  return this.http.put<ProductToOrder>(this.basicUrl+`updateProductToOrder/${id}`,ProductToOrder)
}

}
