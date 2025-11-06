import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideDesignAngularKit } from 'design-angular-kit';

import { routes } from './app.routes';
import localeIt from '@angular/common/locales/it';

import { registerLocaleData } from '@angular/common';
import { provideLayoutConfig } from '@univpm/layout';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpBackend } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

registerLocaleData(localeIt, 'it');


export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'it' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    provideLayoutConfig({ nome: 'Università Politecnica delle Marche' }),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideDesignAngularKit({
      translateLoader: (itPrefix: string, itSuffix: string) => ({
        provide: TranslateLoader,
        useFactory: (http: HttpBackend) =>
          new MultiTranslateHttpLoader(http, [
            { prefix: itPrefix, suffix: itSuffix }, // Load library translations first, so you can edit the keys in your localization file
            { prefix: './public/locale/layout/' }, // Your i18n location
          ]),
        deps: [HttpBackend],
      }),
    })
  ]
};
