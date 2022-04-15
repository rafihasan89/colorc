import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sellerform',
  templateUrl: './sellerform.component.html',
  styleUrls: ['./sellerform.component.css']
})
export class SellerformComponent implements OnInit {
  data = {
    "name": "",
    "phone": "",
    "address": {
      "streetName": "",
      "city": "",
      "country": "",
      "zipCode": ""
  },
       
};
id = 0;
isEdit = false;
  constructor(private sellerService :SellerService,private _router: Router,private _route: ActivatedRoute) {

   }
  
  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // Print the parameter to the console. 
  });

     if(this.id >= 1){
      this.sellerService.getSeller(this.id).subscribe(
        (data: any) => {
          this.data = data.content;
          this.isEdit =true;
          console.log(this.data);
        },
        (error) => {
          console.log(error);
        }
      );
     }
    
    
  }
  onSubmit(){
  if(!this.isEdit){

    this.sellerService.addSeller(this.data).subscribe(
      (data) => {
        Swal.fire('Success', 'Seller is added', 'success');
        this.data = {
          "name": " ",
           "phone": " ",
           "address": {
            "streetName": "",
            "city": "",
            "country": "",
            "zipCode": ""
        },
           
        };
      },

      (error) => {
        Swal.fire('Error!! ', 'Error while adding B ranch', 'error');
        console.log(error);
      }
     );
    }else if(this.isEdit){
       
      this.sellerService.updateSeller(this.id, this.data ).subscribe(
        (data) => {
          Swal.fire('Success', 'Seller is updated', 'success');
          this.data = {
            "name": " ",
            "phone": " ",
            "address": {
              "streetName": "",
              "city": "",
              "country": "",
              "zipCode": ""
          },
           
          };
        },
  
        (error) => {
          Swal.fire('Error!! ', 'Error while update Seller', 'error');
          console.log(error);
        }
       );
    }


  
  }

}
