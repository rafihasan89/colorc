import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  constructor(private _http: HttpClient) { }


  public transfers() {
    return this._http.get(`${baseUrl}/transfer/all`);
  }

    //add user
    public addTransfer(transfer) {
      return this._http.post(`${baseUrl}/transfer/create`, transfer);
    }
  
    //delete user
    public deleteTransfer(id) {
      return this._http.delete(`${baseUrl}/transfer/${id}`);
    }

  //get the single user

  public getTransfer(id) {
    return this._http.get(`${baseUrl}/transfer/${id}`);
  }
  //update user
  public updateTransfer(id, transfer) {
    return this._http.put(`${baseUrl}/transfer/${id}`, transfer);
  }
}
