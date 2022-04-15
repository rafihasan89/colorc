import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private _http: HttpClient) { }


  public payments() {
    return this._http.get(`${baseUrl}/payment/all`);
  }

    //add user
    public addPayment(payment) {
      return this._http.post(`${baseUrl}/payment/create`, payment);
    }
  
    //delete user
    public deletePayment(id) {
      return this._http.delete(`${baseUrl}/payment/${id}`);
    }

  //get the single user

  public getPayment(id) {
    return this._http.get(`${baseUrl}/payment/${id}`);
  }
  public updatePayment(id, payment) {
    return this._http.put(`${baseUrl}/payment/${id}`, payment);
  }
}
