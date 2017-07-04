import {Component, OnInit} from '@angular/core';
import {Item} from '../common/item.model';
import {ItemsService} from '../common/items.service';
import {MessageService} from '../common/message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: [
    `.content-card > .mdl-card__title {
      color: #fff;
      height: 176px;
      background: url('../../assets/items-card.jpg') center / cover;
    }`
  ]
})
export class ItemsComponent implements OnInit {
  title = 'Items Page';
  body = 'This is the about items body';
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
