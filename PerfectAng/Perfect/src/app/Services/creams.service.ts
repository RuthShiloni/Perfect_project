import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cream } from '../Classes/Cream';

@Injectable({
  providedIn: 'root'
})
export class CreamsService {

  private basicUrl : string ="https://localhost:44337/api/Creams/"


  constructor(private http : HttpClient) { }
  
  public GetAllCreams() : Observable<Cream[]>{
    return this.http.get<Cream[]>(this.basicUrl + "getAllCreams")
  }



}
