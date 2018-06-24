import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  model = {};
  constructor() { }

  ngOnInit() {
  }

}
