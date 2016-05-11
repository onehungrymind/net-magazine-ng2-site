import {Component} from '@angular/core';

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
export class AboutComponent {
  title: string = 'About Page';
  body: string = 'This is the about page body';
}
