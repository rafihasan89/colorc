import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-wstatement',
  templateUrl: './wstatement.component.html',
  styleUrls: ['./wstatement.component.css']
})
export class WstatementComponent implements OnInit {
  date = "";
  weekstatements =[];
  view = false;
  constructor(private stockService:StockService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.view = true;
    this.stockService.getWeekStatement(this.date).subscribe((data: any) => {
      this.weekstatements = data.content;
      

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
