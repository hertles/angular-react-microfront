import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RemoteAngularLogoComponent} from './components/remote-angular-logo/remote-angular-logo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RemoteAngularLogoComponent, RouterOutlet]
})
export class AppComponent {
  public count = 0;

  public onCounterClick = () => {
    this.count += 1;
  }
}
