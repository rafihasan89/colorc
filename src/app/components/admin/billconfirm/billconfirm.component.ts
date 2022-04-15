import { Component, OnInit } from '@angular/core';

import { BillService } from 'src/app/services/bill.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-billconfirm',
  templateUrl: './billconfirm.component.html',
  styleUrls: ['./billconfirm.component.css']
})
export class BillconfirmComponent implements OnInit {

  title = 'colorchem';

  bills = [];
 
  cols: any[];
  
  constructor(private billService: BillService) { }

  ngOnInit() {

    this.billService.unauthoriseBills().subscribe((data: any) => {
      this.bills = data.content;
      // data.content.forEach(e=>{
        
      // });
    })

  
      this.cols = [
          { field: 'id', header: 'ID' },
          { field: 'billNo', header: 'Bill No' },
          { field: 'billDate', header: 'Date' },
          { field: 'partyname', header: 'Party Name' },
          { field: 'type', header: 'Type' },
          { field: 'total', header: 'Total' }
      ];

 
  }

  authoriza(id){
    this.billService.authorize(id).subscribe(
      (data) => {
        Swal.fire('Success', 'Bill is Authoriza', 'success');
        
      },

      (error) => {
        Swal.fire('Error!! ', 'Error while Authoriza Bill', 'error');
        console.log(error);
      }
     );
  }

  delete(id){
    this.billService.deleteBill(id).subscribe(
      (data) => {
        Swal.fire('Success', 'Bill is deleted', 'success');
        
      },

      (error) => {
        Swal.fire('Error!! ', 'Error while delete Bill', 'error');
        console.log(error);
      }
     );
  }
  onPrint(divName) {
    let printContent, popupWin;
    printContent = document.getElementById(divName).innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          #tt{
            border-collapse: collapse;
            width: 100%;
            background-color: #dddddd;
        }
        
          #tt td{
          border: 1px solid #000000;
          font-size: 16px;
          font-weight: bold;
          }
        
          #tt tr td:nth-child(2) {
              width: 15px;
          }
         
        
          #tt2{
              border-collapse: collapse;
              width: 100%;
          }
          #tt2 td{
          border: 1px solid #000000;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          }
         
          </style>
        </head>
    <body onload="window.print();window.close()">
    <div style="margin-top:180px">
    ${printContent}
    </div>
  
    
    </body>
      </html>`
    );
    popupWin.document.close();


    // const printContents = document.getElementById(divName).innerHTML;
    // const originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    // window.print();
    // document.body.innerHTML = originalContents;
  }
}