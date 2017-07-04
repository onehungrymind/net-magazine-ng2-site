import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ItemsComponent} from './items/items.component';
import {WidgetsComponent} from './widgets/widgets.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'widgets', component: WidgetsComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
