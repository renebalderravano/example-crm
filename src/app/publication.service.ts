import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) {

   }
 

   savePublication(data: any):Observable<any> {

    return this.http.post('http://localhost:8080/publication/save', data)

  }

  getPublication():Observable<any> {

    return this.http.get('http://localhost:8080/publication/findAll')

  }

  
  getPublicationById(id: number):Observable<any> {
    // return this.housingLocationList.find(housingLocation => housingLocation.id === id);
    return this.http.get('http://localhost:8080/publication/findById/'+id)
  }
}
