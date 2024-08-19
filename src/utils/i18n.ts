import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import fr from '../locales/fr.json';
import bn from '../locales/bn.json';

import { getLocale } from '.';

interface Locale {
    code: string;
    name: string;
}

export const availablesLocales: Locale[] = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'bn', name: 'Bengali' },
];

const messages = {
    en,
    fr,
    bn,
};

const i18n = createI18n({
    legacy: false,
    locale: getLocale(),
    fallbackLocale: 'en',
    messages,
});

export default i18n;
