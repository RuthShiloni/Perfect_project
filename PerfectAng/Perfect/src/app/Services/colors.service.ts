import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from '../Classes/Color';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private basicUrl : string ="https://localhost:44337/api/Colors/"

  constructor(private http : HttpClient) { }

  public GetAllColors() : Observable<Color[]>{
    return this.http.get<Color[]>(this.basicUrl + "getAllColors")
  }

  public GetColorById(id : number) : Observable<Color> {
    return this.http.get<Color>(this.basicUrl + `getColorById/${id}`)
  }


  
}
