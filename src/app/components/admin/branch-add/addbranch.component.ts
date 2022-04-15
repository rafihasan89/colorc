import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/services/branch.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addbranch',
  templateUrl: './addbranch.component.html',
  styleUrls: ['./addbranch.component.css']
})
export class AddbranchComponent implements OnInit {
  brData = {
    "name": "",
       
};
id = 0;
isEdit = false;
  constructor(private branchService :BranchService,private _router: Router,private _route: ActivatedRoute) {

   }
  
  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // Print the parameter to the console. 
  });

     if(this.id >= 1){
      this.branchService.getBranch(this.id).subscribe(
        (data: any) => {
          this.brData = data.content;
          this.isEdit =true;
          console.log(this.brData);
        },
        (error) => {
          console.log(error);
        }
      );
     }
    
    
  }
  onSubmit(){
  if(!this.isEdit){

    this.branchService.addBranch(this.brData).subscribe(
      (data) => {
        Swal.fire('Success', 'Branch is added', 'success');
        this.brData = {
          "name": " "
           
        };
      },

      (error) => {
        Swal.fire('Error!! ', 'Error while adding B ranch', 'error');
        console.log(error);
      }
     );
    }else if(this.isEdit){
       
      this.branchService.updateBranch(this.id, this.brData ).subscribe(
        (data) => {
          Swal.fire('Success', 'Branch is updated', 'success');
          this.brData = {
            "name": " "
           
          };
        },
  
        (error) => {
          Swal.fire('Error!! ', 'Error while update Branch', 'error');
          console.log(error);
        }
       );
    }


  
  }

}
