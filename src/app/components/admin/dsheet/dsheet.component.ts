import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-dsheet',
  templateUrl: './dsheet.component.html',
  styleUrls: ['./dsheet.component.css']
})
export class DsheetComponent implements OnInit {
  startDate = "";
  endDate = "";
  branchid = "0";
  branchs = [];

  totalBuyQty = "";
  totalBuy = "";
  totalSellQty = "";
  totalSell = "";

  buyBills = [];
  sellBills = [];
  stocks =[];
  buyStocks = [];
  sellStocks =[];
  view = false;
  constructor(private branchService: BranchService,private stockService:StockService) { }

  ngOnInit(): void {
    this.branchService.branchs().subscribe((data: any) => {
      this.branchs = data.content;
    })
  }
  onSubmit(){
    this.view = true;
    this.stockService.getDailySheet(this.branchid,this.startDate, this.endDate).subscribe((data: any) => {
      this.buyBills = data.content.buyBillList;
      this.sellBills = data.content.sellBillList;
      this.stocks =  data.content.stocks ; 
      this.buyStocks =  data.content.buyStocks ;
      this.sellStocks =  data.content.sellStocks ;
      this.totalBuy =  data.content.totalBuy;
      this.totalBuyQty =  data.content.totalBuyQty;
      this.totalSell =  data.content.totalSell;
      this.totalSellQty =  data.content.totalSellQty;

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
