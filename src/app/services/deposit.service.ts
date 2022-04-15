import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  constructor(private _http: HttpClient) { }


  public deposits() {
    return this._http.get(`${baseUrl}/deposit/all`);
  }

    //add user
    public addDeposit(deposit) {
      return this._http.post(`${baseUrl}/deposit/create`, deposit);
    }
  
    //delete user
    public deleteDeposit(id) {
      return this._http.delete(`${baseUrl}/deposit/${id}`);
    }

  //get the single user

  public getDeposit(id) {
    return this._http.get(`${baseUrl}/deposit/${id}`);
  }
  //update user
  public updateDeposit(id, deposit) {
    return this._http.put(`${baseUrl}/deposit/${id}`, deposit);
  }
}
