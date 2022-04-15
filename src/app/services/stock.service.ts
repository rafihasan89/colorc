import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private _http: HttpClient) { }

  public stock() {
    return this._http.get(`${baseUrl}/stock/finalStock`);
  }

  public branchstock(id) {
    return this._http.get(`${baseUrl}/stock/branch/${id}`);
  }
  public getDailySheet(branchid,sdate, edate) {
    return this._http.get(`${baseUrl}/stock/dailysheet`,{
      params: {
        branchId:branchid,
        startDate: sdate,
        endDate: edate
      }});
  }
  public getWeekStatement(date) {
    return this._http.get(`${baseUrl}/stock/weekstatement`,{
      params: {
        date: date
      }});
  }

  public getPartyStatement(partyId,sdate, edate) {
    return this._http.get(`${baseUrl}/stock/partystatement`,{
      params: {
        partyId: partyId,
        startDate: sdate,
        endDate: edate
      }});
  }

  public getPartySheet(partyId,sdate, edate) {
    return this._http.get(`${baseUrl}/stock/partysheet`,{
      params: {
        partyId: partyId,
        startDate: sdate,
        endDate: edate
      }});
  }
}
