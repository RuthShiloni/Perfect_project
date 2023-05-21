import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Classes/User';
import { Shape } from '../Classes/Shape';
import { Layer } from '../Classes/Layer';

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  private basicUrl : string = "https://localhost:44337/api/Layer/"
 // private currentUser !: User 
  constructor(private http : HttpClient) { }

  public GetAllLayers() : Observable<Layer[]>{
    return this.http.get<Layer[]>(this.basicUrl + "getAllLayers");
  }
  
}
