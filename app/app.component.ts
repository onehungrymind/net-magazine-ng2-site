import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ItemsComponent} from './items/items.component.ts';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/home', component: HomeComponent},
  {path: '/about', component: AboutComponent},
  {path: '/items', component: ItemsComponent},
  {path: '/*', component: HomeComponent}
])
export class AppComponent {
}
