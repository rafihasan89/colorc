import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { StockService } from 'src/app/services/stock.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  branchid = "0";
  branchs = [];
  stocks =[];
  branchstocks = [];
  constructor(private branchService: BranchService,private stockService :StockService) { }

  ngOnInit(): void {
    this.stockService.stock().subscribe((data:any)=>{
      this.stocks= data.content;
    })

    this.branchService.branchs().subscribe((data: any) => {
      this.branchs = data.content;
    })

   
  }

  onChange(){
    if (this.branchid == "" || this.branchid <= "0") {
      Swal.fire('Error !! ', 'Choose Branch Name', 'error');
      return false;
    }else{
      this.stockService.branchstock(this.branchid).subscribe((data:any)=>{
        this.branchstocks= data.content;
      })
    }
    
  }

}
