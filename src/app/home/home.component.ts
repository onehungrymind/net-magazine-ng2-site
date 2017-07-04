import {Component, OnInit} from '@angular/core';
import {MessageService} from '../common/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `.content-card > .mdl-card__title {
      color: #fff;
      height: 176px;
      background: url('../../assets/home-card.jpg') center / cover;
    }`
  ]
})
export class HomeComponent implements OnInit {
  title = 'Home Page';
  body = 'This is the about home body';
  message: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.message = this.messageService.getMessage();
  }

  updateMessage(m: string): void {
    this.messageService.setMessage(m);
  }
}
