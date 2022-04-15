import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {
  constructor(private _http: HttpClient) { }

  public accountInfos() {
    return this._http.get(`${baseUrl}/accountInfo/all`);
  }

    //add user
    public addAccountInfo(accountInfo) {
      return this._http.post(`${baseUrl}/accountInfo/create`, accountInfo);
    }
  
    //delete user
    public deleteAccountInfo(id) {
      return this._http.delete(`${baseUrl}/accountInfo/${id}`);
    }

  //get the single user

  public getAccountInfo(id) {
    return this._http.get(`${baseUrl}/accountInfo/${id}`);
  }
  //update user
  public updateAccountInfo(id, accountInfo) {
    return this._http.put(`${baseUrl}/accountInfo/${id}`, accountInfo);
  }
}