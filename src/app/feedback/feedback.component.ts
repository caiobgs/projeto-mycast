import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  
  model = new Feedback(1, '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  showFormControls(form: any) {
    return form && form.controls['name'] && form.controls['name'].value;
  }

  constructor() { }

  ngOnInit() {
  }

}
