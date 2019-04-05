import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  model = new Login(1, '', '');
  mostrarMenuEmitter = new EventEmitter<boolean>();

  showFormControls(form: any) {
    return form && form.controls['user'] && form.controls['user'].value;
  }

  constructor() { }

  mostrarMenu(login: Login){
    this.mostrarMenuEmitter.emit(true);
  }

  ngOnInit() { }

}
