import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private _http: HttpClient) { }


  public customers() {
    return this._http.get(`${baseUrl}/customer/all`);
  }

    //add user
    public addCustomer(customer) {
      return this._http.post(`${baseUrl}/customer/create`, customer);
    }
  
    //delete user
    public deleteCustomer(id) {
      return this._http.delete(`${baseUrl}/customer/${id}`);
    }

  //get the single user

  public getCustomer(id) {
    return this._http.get(`${baseUrl}/customer/${id}`);
  }
  //update user
  public updateCustomer(id, customer) {
    return this._http.put(`${baseUrl}/customer/${id}`, customer);
  }
}
