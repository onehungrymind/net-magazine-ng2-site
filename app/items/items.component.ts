import {Component} from '@angular/core';

@Component({
  selector: 'items',
  template: require('./items.component.html'),
  styles: [
    `.content-card > .mdl-card__title {
      color: #fff;
      height: 176px;
      background: url('../images/items-card.jpg') center / cover;
    }`
  ]
})
export class ItemsComponent {
  title: string = 'Items Page';
  body: string = 'This is the about items body';
}
