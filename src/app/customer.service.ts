import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, private appService: AppService) {

  }



  saveCustomer(data: any): Observable<any> {
    var headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer '+ this.appService.token,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    return this.http.post('http://localhost:8080/customer/save', data, { headers: headers })
  }

  getAllCustomers(): Observable<any> {

    var headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer '+ this.appService.token,
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
    return this.http.get('http://localhost:8080/customer/findAll', { headers: headers })

  }


  getCustomerById(id: number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer '+ this.appService.token,
      'Access-Control-Allow-Credentials': 'true'
    });
     return this.http.get('http://localhost:8080/customer/findById/' + id,{headers:headers})
  }
}
