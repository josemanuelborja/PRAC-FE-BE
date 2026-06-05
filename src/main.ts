import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AppComponent } from './app/day10/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

providers: [
 provideRouter(routes)
]
