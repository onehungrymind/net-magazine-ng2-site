import {Component} from '@angular/core';

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
export class HomeComponent {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
}
