import {Component, Input} from '@angular/core';
import {Item} from '../../common/item.model.ts';

@Component({
  selector: 'item',
  template: require('./item.details.component.html'),
  styles: [`
    .item-detail-card {
      cursor: pointer;
      background-color: #03A9F4;
    }
    .item-detail-card .mdl-card__title-text,
    .item-detail-card .mdl-card__supporting-text {
      color: #FFF;
    }
  `]
})

export class ItemDetailsComponent {
  @Input() item: Item;

  addItem(): void {
    this.item.count += 1;
  };
}
