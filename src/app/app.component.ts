import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PodcastsService } from './podcasts.service';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  // mostrarMenu: boolean = false;

  // constructor(private login: Login) {

  // }

  // ngOnInit(){
  //   this.login.mostrarMenuEmitter.subscribe(
  //     mostrar => this.mostrarMenu = mostrar
  //   );
  // }

}


