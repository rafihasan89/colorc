import { Component, OnInit } from '@angular/core';
import { PartyService } from 'src/app/services/party.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  partys=[];
  constructor(private partyService :PartyService) { }

  ngOnInit(): void {
    this.partyService.partys().subscribe((data:any)=>{
      this.partys= data.content;
      console.log(data.content);
   })
  }
  edit(party){

  }
  delete(id){
    this.partyService.deleteParty(id).subscribe(
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

