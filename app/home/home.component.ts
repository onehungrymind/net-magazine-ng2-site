import {Component, OnInit} from '@angular/core';
import {MessageService} from '../common/message.service.ts';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  styles: [
    `.content-card > .mdl-card__title {
      color: #fff;
      height: 176px;
      background: url('../images/home-card.jpg') center / cover;
    }`
  ]
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string;

  constructor(private _stateService: MessageService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
