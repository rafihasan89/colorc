import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {
  constructor(private _http: HttpClient) { }


  public withdraws() {
    return this._http.get(`${baseUrl}/withdraw/all`);
  }

    //add user
    public addWithdraw(withdraw) {
      return this._http.post(`${baseUrl}/withdraw/create`, withdraw);
    }
  
    //delete user
    public deleteWithdraw(id) {
      return this._http.delete(`${baseUrl}/withdraw/${id}`);
    }

  //get the single user

  public getWithdraw(id) {
    return this._http.get(`${baseUrl}/withdraw/${id}`);
  }
  //update user
  public updateWithdraw(id, withdraw) {
    return this._http.put(`${baseUrl}/withdraw/${id}`, withdraw);
  }
}
