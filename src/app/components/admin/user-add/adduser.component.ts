import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users=[];
  userData = {
        "name": "",
        "email": "",
        "username": "",
        "password": "",
        "address": {
            "streetName": "",
            "city": "",
            "country": "",
            "zipCode": ""
        },
        "roles": [
            {
                "name": ""
            }
        ]
  };
  constructor(private userService :UserService,private _router: Router,private _route: ActivatedRoute) { }
  id = 0;
  isEdit = false;
  ngOnInit(): void {


  this._route.queryParams.subscribe(params => {
    this.id = params['id'];
    console.log(this.id); // Print the parameter to the console. 
  });

   if(this.id >= 1){
    this.userService.getUser(this.id).subscribe(
      (data: any) => {
        this.userData = data.content;
        this.isEdit = true;
        console.log(this.userData);
      },
      (error) => {
        console.log(error);
      }
    );
   }
  

  }
  onSubmit(){
    if(!this.isEdit){ 
     this.userService.addUser(this.userData).subscribe(
      (data) => {
        Swal.fire('Success', 'User is added', 'success');
        this.userData = {
          "name": " ",
        "email": " ",
        "username": " ",
        "password": " ",
        "address": {
            "streetName": " ",
            "city": " ",
            "country": " ",
            "zipCode": "100"
        },
        "roles": [
            {
                "name": " "
            }
        ]
        };
      },

      (error) => {
        Swal.fire('Error!! ', 'Error while adding User', 'error');
        console.log(error);
      }
     );
  
    } 
    else if(this.isEdit){
       
      this.userService.updateUser(this.id, this.userData ).subscribe(
        (data) => {
          Swal.fire('Success', 'User is updated', 'success');
          this.userData = {
            "name": " ",
            "email": " ",
            "username": " ",
            "password": " ",
            "address": {
                "streetName": " ",
                "city": " ",
                "country": " ",
                "zipCode": "100"
            },
            "roles": [
                {
                    "name": " "
                }
            ]
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
