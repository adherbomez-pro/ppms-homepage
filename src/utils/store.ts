import { reactive } from 'vue';
import { getLocale } from '.';

interface UserPreferences {
    dashboardSections: string[];
    locale: string;
    darkMode: boolean;
}

interface StoreState {
    organizeModalOpened: boolean;
    sideMenuOpened: boolean;
    userPreferences: UserPreferences;
}

const defaultUserPreferences: UserPreferences = {
    dashboardSections: ['My user profile', 'My training sessions'],
    locale: getLocale(),
    darkMode: false,
};

const retrievePreferences = () => {
    const existingData = localStorage.getItem('user-preferences');
    if (existingData) {
        const storedPreferences = JSON.parse(existingData) as Partial<UserPreferences>;
        return { ...defaultUserPreferences, ...storedPreferences } as UserPreferences;
    }
    return defaultUserPreferences;
};

const defaultState = {
    organizeModalOpened: false,
    sideMenuOpened: false,
    userPreferences: retrievePreferences(),
};

export const store = reactive<StoreState>(defaultState);

export const savePreferences = () =>
    localStorage.setItem('user-preferences', JSON.stringify(store.userPreferences));
