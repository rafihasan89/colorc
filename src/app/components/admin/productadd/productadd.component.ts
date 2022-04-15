import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  data = {
    "name": "",
    "shortName": ""
       
};
id = 0;
isEdit = false;
  constructor(private productService :ProductService,private _router: Router,private _route: ActivatedRoute) {

   }
  
  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // Print the parameter to the console. 
  });

     if(this.id >= 1){
      this.productService.getProduct(this.id).subscribe(
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

    this.productService.addProduct(this.data).subscribe(
      (data) => {
        Swal.fire('Success', 'Product is added', 'success');
        this.data = {
          "name": " ",
           "shortName": " "
           
        };
      },

      (error) => {
        Swal.fire('Error!! ', 'Error while adding B ranch', 'error');
        console.log(error);
      }
     );
    }else if(this.isEdit){
       
      this.productService.updateProduct(this.id, this.data ).subscribe(
        (data) => {
          Swal.fire('Success', 'Product is updated', 'success');
          this.data = {
            "name": " ",
            "shortName": " "
           
          };
        },
  
        (error) => {
          Swal.fire('Error!! ', 'Error while update Product', 'error');
          console.log(error);
        }
       );
    }


  
  }

}
