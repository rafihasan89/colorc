import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  constructor(private _http: HttpClient) { }

  public unauthoriseBills() {
    return this._http.get(`${baseUrl}/bill/unauthorize`);
  }
  public bills() {
    return this._http.get(`${baseUrl}/bill/all`);
  }

  public getPartyItemPrice(partyId, productId) {
    return this._http.get(`${baseUrl}/bill/partyitemprice`,{
      params: {
        partyId: partyId,
        productId: productId
      }});
  }
    //add user
    public addBill(bill) {
      return this._http.post(`${baseUrl}/bill/create`, bill);
    }
  
    //delete user
    public deleteBill(id) {
      return this._http.delete(`${baseUrl}/bill/${id}`);
    }
    //delete user
    public authorize(id) {
      return this._http.put(`${baseUrl}/bill/authorize/${id}`,id);
    }

  //get the single user

  public getBill(id) {
    return this._http.get(`${baseUrl}/bill/${id}`);
  }
  //update user
  public updateBill(id, bill) {
    return this._http.put(`${baseUrl}/bill/${id}`, bill);
  }
}

