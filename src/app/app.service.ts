import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public token: string = ''


  constructor(private http: HttpClient) {

    this.getToken()
  }


  getToken() {

    const httpOptions = {
      headers: new HttpHeaders({

        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==',
        "Access-Control-Allow-Origin": "http://localhost:4200/"

      // "Authorization": 'Basic ' + btoa('spring-security-oauth2-read-write-client' + ':' + 'spring-security-oauth2-read-write-client-password1234')
      })
    };

    const formData = new FormData();
    formData.append('grant_type', 'password')
    formData.append('username', 'admin')
    formData.append('password', 'admin1234')
    formData.append('client_id', 'spring-security-oauth2-read-write-client')

    this.http.post('http://localhost:8080/oauth/token?username=admin&password=admin1234&grant_type=password', formData, httpOptions).subscribe(
      (res: any)=>{
        this.token = res.access_token
        console.log(this.token);          
      },
      err=>{
        console.error(err);
        
      }
    )
  }

}
