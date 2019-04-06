import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  private usuarioAutenticado: boolean = false;

  // mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.user == '' && usuario.password == '') {
      this.usuarioAutenticado = true;
      this.loggedIn.next(true);
      // this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/home'])
    } else {
      this.usuarioAutenticado = false;
      // this.mostrarMenuEmitter.emit(false);
    }
  }
  
  fazerLogout() { 
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
