// Import stylesheets
import { i18n } from './i18n';
import { getI18nValue } from './utils';

// Write TypeScript code!
const appDiv: HTMLElement | null = document.getElementById('app');

if(appDiv){
  const appendInnerHTML = (value: string) => {
    appDiv.innerHTML = `${appDiv.innerHTML} <h1>i18next Result: ${value}</h1> \n`;
  }

  appDiv.innerHTML = `<h1>i18next results:</h1>\n`;

  getI18nValue('example', 'assignedWork').then((value) => {
    appendInnerHTML(value);
  });

  appDiv.addEventListener('click', () => {
    const developer = i18n.t('example:developer');
    const result = i18n.t('example:startedBy', {developer});
    appendInnerHTML(result);
  })
}
