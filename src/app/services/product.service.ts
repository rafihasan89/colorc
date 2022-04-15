import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _http: HttpClient) { }


  public products() {
    return this._http.get(`${baseUrl}/product/all`);
  }

    //add user
    public addProduct(product) {
      return this._http.post(`${baseUrl}/product/create`, product);
    }
  
    //delete user
    public deleteProduct(id) {
      return this._http.delete(`${baseUrl}/product/${id}`);
    }

  //get the single user

  public getProduct(id) {
    return this._http.get(`${baseUrl}/product/${id}`);
  }
  //update user
  public updateProduct(id, product) {
    return this._http.put(`${baseUrl}/product/${id}`, product);
  }
}
