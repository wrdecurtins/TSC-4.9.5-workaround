import i18n, { TypeOptions } from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';

export function initializeI18n() {
  return i18n
    .use(I18NextHttpBackend)
    .init({
      defaultNS: 'example',
      ns: ['example'],
      fallbackLng: 'en',
      supportedLngs: ['en'],
      saveMissing: true,
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      missingKeyHandler: (lng, ns, key) => {
        console.error(`Missing key: namespace: ${ns}, key: ${key}`);
      }
    }, (err) => {
      console.error(err);
    });
}

initializeI18n();

export { i18n };
