import { Component, EventEmitter, Input, Output } from '@angular/core';
import angularLogo from '../../../shared/assets/images/angular-logo.gif';
import { PluralService } from '../../services/plural.service';

@Component({
  selector: 'remote-angular-logo',
  templateUrl: './remote-angular-logo.component.html',
  styleUrl: './remote-angular-logo.component.scss',
  standalone: true,
})
export class RemoteAngularLogoComponent {
  public readonly VOTES_PLURAL_TITLES = ['голос', 'голоса', 'голосов'];

  @Input() public count = 0;

  constructor(public pluralService: PluralService) {}

  public logoImage = angularLogo;

  @Output() public onCounterClick = new EventEmitter();

  public handleCounterClick = () => {
    this.onCounterClick.emit('abc');
  };
}
