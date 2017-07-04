import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  private _message = 'Hello Message';

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };
}
