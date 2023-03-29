import 'i18next';
import { defaultNS } from './i18n';

import example from './locales/example.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      example: typeof example;
    };
    // returnNull: false;
  }
}
