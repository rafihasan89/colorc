import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  constructor(private _http: HttpClient) { }


  public partys() {
    return this._http.get(`${baseUrl}/party/all`);
  }

    //add user
    public addParty(party) {
      return this._http.post(`${baseUrl}/party/create`, party);
    }
  
    //delete user
    public deleteParty(id) {
      return this._http.delete(`${baseUrl}/party/${id}`);
    }

  //get the single user

  public getParty(id) {
    return this._http.get(`${baseUrl}/party/${id}`);
  }
  //update user
  public updateParty(id, party) {
    return this._http.put(`${baseUrl}/party/${id}`, party);
  }
}
