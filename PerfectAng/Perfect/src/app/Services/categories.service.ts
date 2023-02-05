import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Classes/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private basicUrl : string ="https://localhost:44337/api/Categories/"

  constructor(private http : HttpClient) { }

  public GetAllCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.basicUrl + "getAllCategories")
  }
}
