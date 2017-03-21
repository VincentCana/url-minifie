import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./app.component.css']
})

export class DashboardComponent {
  constructor(private router: Router){
    if(!localStorage.getItem('user')) {
      this.router.navigateByUrl('/login');
    }
  }
}
