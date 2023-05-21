import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Classes/User';
import { Shape } from '../Classes/Shape';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  private basicUrl : string = "https://localhost:44337/api/Shape/"
 // private currentUser !: User 
  constructor(private http : HttpClient) { }

  public GetAllShapes() : Observable<Shape[]>{
    return this.http.get<Shape[]>(this.basicUrl + "getAllShapes");
  }
  
}
