import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branchs=[];
  constructor(private branchService :BranchService,private userService :UserService) { }

  ngOnInit(): void {
    this.branchService.branchs().subscribe((data:any)=>{
      this.branchs= data.content;
      console.log(data.content);
   })
  }
  edit(branch){

  }
  delete(id){
    this.branchService.deleteBranch(id).subscribe(
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
