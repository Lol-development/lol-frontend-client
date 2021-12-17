import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  public base_url: string = environment.base_url;
  get header() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 

  constructor(private http:HttpClient){}


  getQuotationsByIdAndStatus(status:string, id:string){
    const url = `${this.base_url}/quotations/${status}/${id}`;
    return  this.http.get(url, this.header);
  }
  deleteQuotation(id:string){
    const url = `${this.base_url}/quotations/delete/${id}`;
    return  this.http.delete(url, this.header);
  }

  createQuotation(data:{}){
    const url = `${this.base_url}/quotations/create`;
    return this.http.post(url,data ,this.header);
  }
  getPorts(){
    const url = `${this.base_url}/ports/getall`;
    return this.http.get(url, this.header);
  }
  
  
}
