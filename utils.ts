import type { Namespace, TFuncKey } from 'i18next';
import { i18n } from './i18n';

export async function getI18nValue<N extends Namespace>(
    namespace: N,
    key: TFuncKey<N>
): Promise<string> {
  const loaded = i18n.hasLoadedNamespace(namespace as string);

  if (!loaded) {
    await i18n.loadNamespaces(namespace as string);
  }


  return i18n.t(key, { ns: namespace });
}
