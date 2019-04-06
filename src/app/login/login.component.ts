import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { EventEmitter } from 'events';

@Component({
  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  usuario = new Usuario('', '');
  
  showFormControls(form: any) {
    return form && form.controls['user'] && form.controls['user'].value;
  }

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
//    console.log(this.usuario);
  }

}
