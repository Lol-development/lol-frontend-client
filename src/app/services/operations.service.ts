import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  public base_url: string = environment.base_url;
  get header() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 

  constructor(private http:HttpClient){}
  getClientOperations(client_id:string){
    const url = `${this.base_url}/operations/getforclientid/${client_id}`;
     return this.http.get(url , this.header);
  }

  getOperationCarries(id:string){
    const url = `${this.base_url}/carries/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }
  getOperationsDischarges(id:string){
    const url  = `${this.base_url}/discharges/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }

  getOperationFactualState(id:string){
    const url = `${this.base_url}/factualstatus/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }
  getOperationDispatches(id:string){
    const url = `${this.base_url}/dispatches/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }
  getEvidences(id:string){
    const url = `${this.base_url}/evidences/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }
  getOperationRcc(id:string){
    const url = `${this.base_url}/rcc/getforoperationid/${id}`;
    return  this.http.get(url, this.header);
  }

  updateTurnAdmin(data:{}, id:string){
    const url = `${this.base_url}/rcc/client/update/${id}`;
     return this.http.put(url, data, this.header);
  }
  facturactionOperation(oid:string){
    const url = `${this.base_url}/rcc/getturnsforoperationid/${oid}`;
    return this.http.get(url, this.header);
  }
}
