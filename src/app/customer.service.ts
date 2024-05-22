import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {

   }
 

   saveCustomer(data: any):Observable<any> {
    return this.http.post('http://localhost:8080/customer/save', data)

  }

  getAllCustomers():Observable<any> {

    return this.http.get('http://localhost:8080/customer/findAll')

  }

  
  getCustomerById(id: number):Observable<any> {
    // return this.CustomerList.find(Customer => Customer.id === id);
    return this.http.get('http://localhost:8080/customer/findById/'+id)
  }
}
