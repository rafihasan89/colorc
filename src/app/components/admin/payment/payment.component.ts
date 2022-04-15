import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments=[];
  cols: any[];
  constructor(private paymentService :PaymentService) { }

  ngOnInit(): void {
    this.paymentService.payments().subscribe((data:any)=>{
      this.payments= data.content;
       
   })

   this.cols = [
    { field: 'id', header: 'ID' },
    { field: 'date', header: 'Date' },
    { field: 'partyname', header: 'Party Name' },
    { field: 'amount', header: 'Amount' }
];
  }
 
  delete(id){
    this.paymentService.deletePayment(id).subscribe(
      (data) => {
        Swal.fire('Success', 'Branch id deleted', 'success');
        
      },

      (error) => {
        Swal.fire('Error!! ', 'Error while delete branch', 'error');
        console.log(error);
      }
     );
  }
}
