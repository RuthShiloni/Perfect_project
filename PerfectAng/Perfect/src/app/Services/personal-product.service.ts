import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalProduct } from '../Classes/PersonalProduct';
@Injectable({
  providedIn: 'root'
})
export class PersonalProductService {

  basicUrl :string = "https://localhost:44337/api/PersonalProduct/"

  constructor(private http : HttpClient) { }
  
  public AddPersonalP(pp : PersonalProduct) : Observable<any>{
    return this.http.post<any>(this.basicUrl+"addPersonalP" , pp)
  }
  public DeletePersonalP(id : number) : Observable<any>{
    return this.http.delete<any>(this.basicUrl+`deletePersonalP/${id}`)
  }
}
