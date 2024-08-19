import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from './utils/i18n';
import { store } from './utils/store';

// Allow darkmode forcing for lighthouse checks
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('force-dark-mode')) {
    store.userPreferences.darkMode = true;
}

createApp(App).use(i18n).mount('#app');
