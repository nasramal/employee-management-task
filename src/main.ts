import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.config';  // Make sure you're importing `AppModule`

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
