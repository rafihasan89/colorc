import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }


  public users() {
    return this._http.get(`${baseUrl}/user/all`);
  }

    //add user
    public addUser(user) {
      return this._http.post(`${baseUrl}/user/create`, user);
    }
  
    //delete user
    public deleteUser(id) {
      return this._http.delete(`${baseUrl}/user/${id}`);
    }

  //get the single user

  public getUser(id) {
    return this._http.get(`${baseUrl}/user/${id}`);
  }
  //update user
  public updateUser(id,user) {
    return this._http.put(`${baseUrl}/user/${id}`, user);
  }
}
