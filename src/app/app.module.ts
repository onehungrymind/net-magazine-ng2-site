import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MdButtonModule, MdCardModule, MdToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ItemsComponent} from './items/items.component';
import {ItemDetailsComponent} from './items/item-details/item.details.component';
import {WidgetsComponent} from './widgets/widgets.component';
import {ItemsService} from './common/items.service';
import {MessageService} from './common/message.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ItemsComponent,
    ItemDetailsComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [ItemsService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
