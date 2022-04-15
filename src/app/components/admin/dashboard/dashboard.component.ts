import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = null;
  constructor(private snack: MatSnackBar,
    private login: LoginService,
    private router: Router) {}

  ngOnInit(): void {
    this.user = this.login.getUser();
     
  }
  logout(){
    this.login.logout();
    this.router.navigate(['login']);
  }
}
