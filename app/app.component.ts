import {Component} from '@angular/core';
import {AboutComponent} from './about/about.component';
import {ItemsComponent} from './items/items.component.ts';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [HomeComponent, AboutComponent, ItemsComponent]
})
export class AppComponent {}
