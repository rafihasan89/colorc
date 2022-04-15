import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyService } from 'src/app/services/party.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partyform',
  templateUrl: './partyform.component.html',
  styleUrls: ['./partyform.component.css']
})
export class PartyformComponent implements OnInit {
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
  constructor(private partyService :PartyService,private _router: Router,private _route: ActivatedRoute) {

   }
  
  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // Print the parameter to the console. 
  });

     if(this.id >= 1){
      this.partyService.getParty(this.id).subscribe(
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

    this.partyService.addParty(this.data).subscribe(
      (data) => {
        Swal.fire('Success', 'Party is added', 'success');
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
       
      this.partyService.updateParty(this.id, this.data ).subscribe(
        (data) => {
          Swal.fire('Success', 'Party is updated', 'success');
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
          Swal.fire('Error!! ', 'Error while update Party', 'error');
          console.log(error);
        }
       );
    }


  
  }

}
