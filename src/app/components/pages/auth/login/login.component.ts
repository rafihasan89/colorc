import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log('login btn clicked');

    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        //login...
        this.login.loginUser(data.content.token);
        let user = {
          name:data.content.name,
          username: data.content.username,
          roles: data.content.roles,
        };
        
          //redirect ...ADMIN: admin-dashboard
          //redirect ...NORMAL:normal-dashboard
          data.content.roles.forEach(element => {
            if (element == 'ROLE_ADMIN') {
              //admin dashboard
              // window.location.href = '/admin';
              this.login.setUser(user);
              this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
            } else if (element == 'ROLE_OFFICER') {
              this.login.setUser(user);
              this.router.navigate(['officer']);
              this.login.loginStatusSubject.next(true);
            } else {
              this.login.logout();
            }
          });
          
        
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }
}
