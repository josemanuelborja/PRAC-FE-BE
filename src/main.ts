import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AppComponent } from './app/day5/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
