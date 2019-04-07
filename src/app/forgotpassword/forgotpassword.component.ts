import { Component, OnInit } from '@angular/core';
import { Forgot } from './forgotpassword';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  usuario = new Forgot('');

  submitted = false;

  onSubmit() { this.submitted = true; }
  
  showFormControls(form: any) {
    return form && form.controls['user'] && form.controls['user'].value;
  }

  constructor() { }

  ngOnInit() {
  }

}
