import {Component, OnInit} from '@angular/core';
import {MessageService} from '../common/message.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
    `.content-card > .mdl-card__title {
      color: #fff;
      height: 176px;
      background: url('../../assets/about-card.jpg') center / cover;
    }`
  ]
})
export class AboutComponent implements OnInit {
  title = 'About Page';
  body = 'This is the about page body';
  message: string;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.message = this.messageService.getMessage();
  }

  updateMessage(m: string): void {
    this.messageService.setMessage(m);
  }
}
