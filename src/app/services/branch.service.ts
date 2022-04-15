import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  constructor(private _http: HttpClient) { }


  public branchs() {
    return this._http.get(`${baseUrl}/branch/all`);
  }

    //add user
    public addBranch(branch) {
      return this._http.post(`${baseUrl}/branch/create`, branch);
    }
  
    //delete user
    public deleteBranch(id) {
      return this._http.delete(`${baseUrl}/branch/${id}`);
    }

  //get the single user

  public getBranch(id) {
    return this._http.get(`${baseUrl}/branch/${id}`);
  }
  //update user
  public updateBranch(id, branch) {
    return this._http.put(`${baseUrl}/branch/${id}`, branch);
  }
}
