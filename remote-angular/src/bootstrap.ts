import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { RemoteAngularLogoComponent } from './app/components/remote-angular-logo/remote-angular-logo.component';

bootstrapApplication(RemoteAngularLogoComponent)
  .then((appRef) => {
    const el = createCustomElement(RemoteAngularLogoComponent, {
      injector: appRef.injector,
    });
    customElements.define('remote-angular-logo', el);
  })
  .catch(console.error);
