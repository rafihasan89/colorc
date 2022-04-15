import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private _http: HttpClient) { }


  public sellers() {
    return this._http.get(`${baseUrl}/seller/all`);
  }

    //add user
    public addSeller(seller) {
      return this._http.post(`${baseUrl}/seller/create`, seller);
    }
  
    //delete user
    public deleteSeller(id) {
      return this._http.delete(`${baseUrl}/seller/${id}`);
    }

  //get the single user

  public getSeller(id) {
    return this._http.get(`${baseUrl}/seller/${id}`);
  }
  //update user
  public updateSeller(id, seller) {
    return this._http.put(`${baseUrl}/seller/${id}`, seller);
  }
}