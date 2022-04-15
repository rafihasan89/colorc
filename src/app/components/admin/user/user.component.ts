import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users=[];
  constructor(private userService :UserService) { }

  ngOnInit(): void {
    this.userService.users().subscribe((data:any)=>{
      this.users= data.content;
      console.log(data.content);
   })
  }
  edit(user){

  }
  delete(id){
    this.userService.deleteUser(id).subscribe(
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
