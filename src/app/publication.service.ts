import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from './app.service'
@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient, private appService: AppService) {

  }

 
 


  savePublication(data: any): Observable<any> {
    var headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer '+ this.appService.token,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    return this.http.post('http://localhost:8080/publication/save', data , { headers: headers })

  }

  getPublication(): Observable<any> {

    

    var headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer '+ this.appService.token,
      'Access-Control-Allow-Credentials': 'true'
    })

    return this.http.get('http://localhost:8080/publication/findAll', { headers: headers })
  }


  getPublicationById(id: number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.appService.token,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    return this.http.get('http://localhost:8080/publication/findById/' + id, { headers: headers })
  }
}
