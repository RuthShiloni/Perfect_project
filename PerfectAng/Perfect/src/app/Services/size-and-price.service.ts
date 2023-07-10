import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SizePrice} from '../Classes/SizePrice'

@Injectable({
  providedIn: 'root'
})
export class SizeAndPriceService {

  basicUrl : string = "https://localhost:44337/api/SizePrice/"
  constructor(private http : HttpClient) { }

  public getSizeAndPriceByPId(id : number):Observable<SizePrice[]>{
   return this.http.get<SizePrice[]>(this.basicUrl+`getSize&PriceByPId/${id}`)
  }

  public GetSizePriceById(id : number) : Observable<SizePrice>{
    return this.http.get<SizePrice>(this.basicUrl +`getSizePriceById/${id}`)
  }

}
