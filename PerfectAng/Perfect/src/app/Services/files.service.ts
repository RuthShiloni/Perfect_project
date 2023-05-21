import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const F_API = environment.baseUrl + "/personalProduct/";

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http : HttpClient) { } 
   upload(file: File): Observable<HttpEvent<boolean>> {

    const req = new HttpRequest('POST', `${F_API}upload`,file, {
      reportProgress: true,
      responseType: 'json'
    });
    
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${F_API}files`);
  }

}
