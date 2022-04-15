import { Component, OnInit } from '@angular/core';
import { PartyService } from 'src/app/services/party.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-pstatement',
  templateUrl: './pstatement.component.html',
  styleUrls: ['./pstatement.component.css']
})
export class PstatementComponent implements OnInit {
  partyId = "";
  partyName = "";
  startDate = "";
  endDate = "";
  total ="";
  totaldebit="";
  totalcredit="";

  partys = [];
  
  partystatement = [];
  view = false;
  constructor(private stockService:StockService,private partyService: PartyService) { }

  ngOnInit(): void {
    this.partyService.partys().subscribe((data: any) => {
      this.partys = data.content;
    })
  }
  onSubmit(){
    this.view = true;
    this.stockService.getPartyStatement(this.partyId,this.startDate, this.endDate).subscribe((data: any) => {
      this.partyName = data.content.partyName;
      this.partystatement = data.content.partyStatements;
      this.total = data.content.total;
      this.totaldebit = data.content.totaldebit;
      this.totalcredit = data.content.totalcredit;
      this.totalcredit = data.content.totalcredit;
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
