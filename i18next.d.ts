import 'i18next';
import { defaultNS, TFu } from './i18n';

import example from './locales/example.json';

declare module 'i18next' {
  /*
   * You can redeclare the TFunction to be a simpler type to fix errors like
   * are on line 14 of utils.ts

   * This will reduce type safety from the t function and related methods
   * considerably though.
  */
  interface TFunction {
    (key: string, options?: {[key: string]: string}): string
  }


  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;

    // Comment out the contents of the resources prop
    resources: {
      // example: typeof example;
    };
    // returnNull: false;
  }
}
