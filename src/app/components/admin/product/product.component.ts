import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products=[];
  constructor(private productService :ProductService) { }

  ngOnInit(): void {
    this.productService.products().subscribe((data:any)=>{
      this.products= data.content;
      console.log(data.content);
   })
  }
  edit(product){

  }
  delete(id){
    this.productService.deleteProduct(id).subscribe(
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
