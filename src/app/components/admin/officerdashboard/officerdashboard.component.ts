import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-officerdashboard',
  templateUrl: './officerdashboard.component.html',
  styleUrls: ['./officerdashboard.component.css']
})
export class OfficerdashboardComponent implements OnInit {
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