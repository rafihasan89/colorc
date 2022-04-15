import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private _http: HttpClient) { }


  public accounts() {
    return this._http.get(`${baseUrl}/account/all`);
  }

    //add user
    public addAccount(account) {
      return this._http.post(`${baseUrl}/account/create`, account);
    }
  
    //delete user
    public deleteAccount(id) {
      return this._http.delete(`${baseUrl}/account/${id}`);
    }

  //get the single user

  public getAccount(id) {
    return this._http.get(`${baseUrl}/account/${id}`);
  }
  public getAccountByAcno(id) {
    return this._http.get(`${baseUrl}/account/acno/${id}`);
  }
  //update user
  public updateAccount(id, account) {
    return this._http.put(`${baseUrl}/account/${id}`, account);
  }
}
