import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  ngOnInit() {
  }
  
  constructor(private authService: AuthService, public router: Router) { }

  onLogout() {
    this.authService.fazerLogout();
  }
}
