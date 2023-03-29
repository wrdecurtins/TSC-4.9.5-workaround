import i18n, { TypeOptions } from 'i18next';


export type Resources = TypeOptions['resources'];
export const defaultNS = 'common';

export function initializeI18n() {
  return i18n
    .init({
      defaultNS,
      ns: ['common', 'eventService'],
      fallbackLng: 'en',
      supportedLngs: ['en'],
      saveMissing: true,

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },

      backend: {
        backendOptions: [
          {
            expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days

            // Update version numbers whenever you add new translations (this will bust user's caches)
            versions: {
              en: 'v1.33',
            },
          },
          {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
          },
        ],
      }
    });
}

export { i18n };
