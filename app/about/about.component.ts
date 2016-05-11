import {Component, OnInit} from '@angular/core';
import {MessageService} from '../common/message.service.ts';

@Component({
  selector: 'about',
  template: require('./about.component.html'),
  styles: [
    `.content-card > .mdl-card__title {
      color: #fff;
      height: 176px;
      background: url('../images/about-card.jpg') center / cover;
    }`
  ]
})
export class AboutComponent implements OnInit {
  title: string = 'About Page';
  body: string = 'This is the about page body';
  message: string;

  constructor(public _stateService: MessageService) {
  }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
