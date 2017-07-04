import {Injectable} from '@angular/core';
import {Item} from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [
    {name: 'Item 1', description: 'This is an item', count: 0},
    {name: 'Item 2', description: 'This is an item', count: 0},
    {name: 'Item 3', description: 'This is an item', count: 0},
    {name: 'Item 4', description: 'This is an item', count: 0}
  ];

  getItems(): Item[] {
    return this.items;
  };
}
