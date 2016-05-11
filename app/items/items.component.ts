import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {Item} from '../common/item.model';
import {ItemsService} from '../common/items.service';
import {MessageService} from '../common/message.service.ts';
import {ItemDetailsComponent} from './item-details/item.details.component.ts';

@Component({
  selector: 'items',
  template: require('./items.component.html'),
  directives: [ItemDetailsComponent],
  styles: [
    `.content-card > .mdl-card__title {
      color: #fff;
      height: 176px;
      background: url('../images/items-card.jpg') center / cover;
    }`
  ]
})
export class ItemsComponent implements OnInit {
  title: string = 'Items Page';
  body: string = 'This is the about items body';
  message: string;
  items: Item[];

  constructor(
    private _stateService: MessageService,
    private _itemsService: ItemsService) {}

  ngOnInit() {
    this.items = this._itemsService.getItems();
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
