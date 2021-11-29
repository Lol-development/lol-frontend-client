import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public base_url:string = environment.base_url;
  // get headers() {
  //   return {
  //     headers: {
  //       'x-access-token': `${localStorage.getItem('token')}`
  //     }
  //   }
  // } 

  constructor(private http: HttpClient) { }

  register(data:{}){
    const url = `${this.base_url}/client/register`;
    return  this.http.post(url, data);
  }
  sendConfirmEmail(data:{}){
    const url = `${this.base_url}/client/ses/verify_email`;
    return this.http.post(url, data); 
  }
  validateCode(data:{}){
    const url = `${this.base_url}/code/validate`;
    return this.http.post(url, data);
  }
  validateEmail(data:{}){
    const url = `${this.base_url}/client/ses/confirm_verify`;
    return this.http.post(url, data);
  }
  login(data:{}){
    const url = `${this.base_url}/auth/client/login`;
    return this.http.post(url, data);
  }
}
