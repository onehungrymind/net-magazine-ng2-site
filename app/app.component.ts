import {Component} from '@angular/core';

@Component({
  selector: 'app',
  styles: [`
    header {
      overflow: visible;
      background-color: white;
    }

    h1 { text-align: center; }
  `],
  template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">
            <span class="mdl-layout-title">
              <img class="logo" src="images/logo.png">
            </span>
          </span>
        </div>
      </header>
      <main class="mdl-layout__content">
        <div class="page-content content-max-width">
          <h1>Hello Angular 2!</h1>
        </div>
      </main>
    </div>
  `
})

export class AppComponent {}
