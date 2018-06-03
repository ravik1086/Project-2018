import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('course') course:any;
  constructor() { }

  ngOnInit() {
  }

}
