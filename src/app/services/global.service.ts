import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  get headers() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 

  public base_url:string = environment.base_url;
  constructor(private http: HttpClient) { }

  getPrefixNumber(){
    const url = `${this.base_url}/prefix`;
    return this.http.get(url, this.headers);
  }


}
