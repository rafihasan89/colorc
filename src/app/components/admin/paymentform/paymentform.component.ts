import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyService } from 'src/app/services/party.service';
import { PaymentService } from 'src/app/services/payment.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent implements OnInit {
  partys = [];
  data = {
  "date":"",
   "party": {
      "id": "0",
    },
  "amount": ""
       
};
myDate = new Date();
id = 0;
isEdit = false;
  constructor(private datePipe: DatePipe,private partyService :PartyService,private paymentService :PaymentService,private _router: Router,private _route: ActivatedRoute) {

   }
  
  ngOnInit(): void {
    this.data.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
     
    this.partyService.partys().subscribe((data: any) => {
      this.partys = data.content;
    })

    this._route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // Print the parameter to the console. 
  });

     if(this.id >= 1){
      this.paymentService.getPayment(this.id).subscribe(
        (data: any) => {
          this.data.party.id = data.content.partyid;
          this.data.date = data.content.date;
          this.data.amount = data.content.amount;
          
          this.isEdit =true;
          
        },
        (error) => {
          console.log(error);
        }
      );
     }
    
    
  }
  onSubmit(){

  if(this.validation()){
  if(!this.isEdit){

    this.paymentService.addPayment(this.data).subscribe(
      (data) => {
        Swal.fire('Success', 'Payment is added', 'success');
        this.data.party.id = "0",
        this.data.amount = "";
         
      },

      (error) => {
        Swal.fire('Error!! ', 'Error while adding B ranch', 'error');
        console.log(error);
      }
     );
    }else if(this.isEdit){
       
      this.paymentService.updatePayment(this.id, this.data ).subscribe(
        (data) => {
          Swal.fire('Success', 'Payment is updated', 'success');
          this.data.party.id = "0",
             this.data.amount ="";
        },
  
        (error) => {
          Swal.fire('Error!! ', 'Error while update Payment', 'error');
          console.log(error);
        }
       );
    }

  }
  
  }

  validation(){
    if (this.data.date == "") {
      Swal.fire('Error !! ', 'Give Bill Date', 'error');
      return false;
    }
    if (this.data.party.id == "" || this.data.party.id <= "0") {
      Swal.fire('Error !! ', 'Choose Party Name', 'error');
      return false;
    }
    return true;
  }

}

