import { Component, OnInit } from '@angular/core';
import { PartyService } from 'src/app/services/party.service';
import { StockService } from 'src/app/services/stock.service';


@Component({
  selector: 'app-psheet',
  templateUrl: './psheet.component.html',
  styleUrls: ['./psheet.component.css']
})
export class PsheetComponent implements OnInit {
  ii = 0;
  partyId = "";
  partyName = "";
  startDate = "";
  endDate = "";

  partys = [];
  partyBills = [];
   
  partyStocks =[];
   
  view = false;
  constructor(private stockService:StockService,private partyService: PartyService) { }

  ngOnInit(): void {
    this.partyService.partys().subscribe((data: any) => {
      this.partys = data.content;
    })
  }
  onSubmit(){
    this.view = true;
    this.stockService.getPartySheet(this.partyId,this.startDate, this.endDate).subscribe((data: any) => {
      this.partyBills = data.content.partyBills;
      this.partyName = data.content.partyName;
      this.partyStocks =  data.content.partyStocks ; 
      

    })

  }
  onPrint(divName) {
    const printContents = document.getElementById(divName).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }
}
