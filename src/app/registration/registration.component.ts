import { Component, OnInit } from '@angular/core';
import { Registration } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration = new Registration('', '', '', '', '', '', '', null, '', '', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  showFormControls(form: any) {
    return form && form.controls['user'] && form.controls['user'].value;
  }

  constructor() { }

  ngOnInit() {
  }

}
