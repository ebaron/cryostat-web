import { Component, EventEmitter, Output } from '@angular/core';
import { CommandMessage } from 'src/app/app.component';

@Component({
  selector: 'app-connect-button',
  templateUrl: './connect-button.component.html'
})
export class ConnectButtonComponent {
  @Output() fired = new EventEmitter<CommandMessage>();
  host = '';

  fire(): void {
    this.fired.emit({ command: 'connect', args: [ this.host ] });
    this.host = '';
  }
}