import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideDesignAngularKit } from 'design-angular-kit';

import { routes } from './app.routes';
import localeIt from '@angular/common/locales/it';

import { registerLocaleData } from '@angular/common';
registerLocaleData(localeIt, 'it');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'it' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideDesignAngularKit()
  ]
};
