import {Component, EventEmitter, Input, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'remote-angular-logo',
  templateUrl: './remote-angular-logo.component.html',
  styleUrl: './remote-angular-logo.component.scss',
  standalone: true,
})
export class RemoteAngularLogoComponent {
  @Input() public count = 0;

  @Output() public onCounterClick = new EventEmitter();

  public handleCounterClick = () => {
    this.onCounterClick.emit();
  }
}
