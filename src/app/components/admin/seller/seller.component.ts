import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellers=[];
  constructor(private sellerService :SellerService) { }

  ngOnInit(): void {
    this.sellerService.sellers().subscribe((data:any)=>{
      this.sellers= data.content;
      console.log(data.content);
   })
  }
  edit(seller){

  }
  delete(id){
    this.sellerService.deleteSeller(id).subscribe(
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
