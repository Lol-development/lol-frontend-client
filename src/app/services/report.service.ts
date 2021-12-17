import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  public base_url: string = environment.base_url;
  get header() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 

  constructor(private http:HttpClient){}


  getReport(id:string){
    const url = `${this.base_url}/reports/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }
}
