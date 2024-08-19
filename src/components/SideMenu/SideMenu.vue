<script setup lang="ts">
import Vue from 'vue';
import { savePreferences, store } from '../../utils/store';
import AccountIcon from '../icons/AccountIcon.vue';
import CloseIcon from '../icons/CloseIcon.vue';
import DarkIcon from '../icons/DarkIcon.vue';
import DocumentIcon from '../icons/DocumentIcon.vue';
import HomeIcon from '../icons/HomeIcon.vue';
import IncidentIcon from '../icons/IncidentIcon.vue';
import LightIcon from '../icons/LightIcon.vue';
import LogoutIcon from '../icons/LogoutIcon.vue';
import OrderIcon from '../icons/OrderIcon.vue';
import ProjectIcon from '../icons/ProjectIcon.vue';
import TrainingIcon from '../icons/TrainingIcon.vue';
import LanguageSelect from './LanguageSelect.vue';

interface MenuItem {
    name: string;
    route: string;
    icon: Vue.Component;
    isActive: boolean;
    hideMobile: boolean;
}

const menuItems: MenuItem[] = [
    {
        name: 'menu.home',
        route: '/ppms-homepage/',
        icon: HomeIcon,
        isActive: true,
        hideMobile: false,
    },
    {
        name: 'menu.training',
        route: '/ppms-homepage/',
        icon: TrainingIcon,
        isActive: false,
        hideMobile: false,
    },
    {
        name: 'menu.projects',
        route: '/ppms-homepage/',
        icon: ProjectIcon,
        isActive: false,
        hideMobile: false,
    },
    {
        name: 'menu.orders',
        route: '/ppms-homepage/',
        icon: OrderIcon,
        isActive: false,
        hideMobile: false,
    },
    {
        name: 'menu.documents',
        route: '/ppms-homepage/',
        icon: DocumentIcon,
        isActive: false,
        hideMobile: false,
    },
    {
        name: 'menu.incidents',
        route: '/ppms-homepage/',
        icon: IncidentIcon,
        isActive: false,
        hideMobile: false,
    },
    {
        name: 'menu.profile',
        route: '/ppms-homepage/',
        icon: AccountIcon,
        isActive: false,
        hideMobile: true,
    },
];

const toggleTheme = (event: Event) => {
    event.stopPropagation();
    store.userPreferences.darkMode = !store.userPreferences.darkMode;
    savePreferences();
};

// Close side menu if mouse click outside
document.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as Node;

    if (store.sideMenuOpened) {
        const toggle = document.querySelector('.menu-icon');
        const sideMenu = document.querySelector('.side-menu');

        if (!toggle?.contains(target) && !sideMenu?.contains(target)) {
            store.sideMenuOpened = false;
        }
    }
});
</script>

<template>
    <nav :class="['side-menu', { open: store.sideMenuOpened }]">
        <div class="navigation-bar-top">
            <div class="close-icon">
                <CloseIcon @click="() => (store.sideMenuOpened = false)" />
            </div>
            <a href="/ppms-homepage/" class="logo" :aria-label="$t('menu.home')">
                <img src="../../assets/images/logo.png" alt="Logo" />
                <p>PPMS</p>
            </a>
            <ul>
                <li
                    v-for="item in menuItems"
                    :key="item.name"
                    :class="{ 'hide-mobile': item.hideMobile }"
                >
                    <a
                        :href="item.route"
                        :aria-label="$t(item.name)"
                        :class="{ 'is-active': item.isActive }"
                    >
                        <component :is="item.icon" class="item.icon" />
                        <p class="small-text">{{ $t(item.name) }}</p>
                    </a>
                </li>
            </ul>
        </div>
        <br />
        <div class="navigation-bar-bottom">
            <LanguageSelect />
            <button @click="toggleTheme" class="toggle-theme small-text">
                <div v-if="store.userPreferences.darkMode"><DarkIcon />{{ $t('theme.dark') }}</div>
                <div v-else><LightIcon /> {{ $t('theme.light') }}</div>
            </button>
        </div>
        <br />
        <a href="/ppms-homepage/" class="logout">
            <LogoutIcon />
            <p class="small-text">{{ $t('menu.logout') }}</p>
        </a>
    </nav>
</template>

<style scoped>
.side-menu {
    position: fixed;
    width: 212px;
    height: 100%;
    padding: var(--spacing-md);
    background-color: var(--color-background-secondary);
    color: var(--color-text-body);
}
.side-menu .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;

    p {
        margin: 0.5rem;
    }
}
.side-menu .logo:hover {
    background-color: var(--color-background-secondary) !important;
}

.side-menu ul {
    list-style-type: none;
    padding: 0;
}

.side-menu li,
.logout {
    display: flex;
    align-items: center;
    height: auto;
    gap: var(--spacing-xs);
    color: var(--color-text-body);
}

.logout {
    padding: var(--font-nav-item);
}

.logout:hover {
    background-color: var(--color-logout) !important;
}

.side-menu p {
    color: var(--color-text-header);
    margin: 0;
}
li a {
    padding: var(--font-nav-item);
    color: var(--color-text-body);
    width: 100%;
    height: 100%;
}

.side-menu a:hover,
.is-active {
    border-radius: 10rem;
}
.side-menu a:hover {
    background-color: var(--color-nav-hover);
}
.side-menu .is-active {
    background-color: var(--color-tertiary);
}
.close-icon {
    display: none;
}
button.toggle-theme {
    display: flex;
    align-items: center;
    padding: var(--spacing-xs);
    background-color: var(--color-background);
    color: var(--color-text-header);
    border: 1px solid var(--color-text-body);
}
button div {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
}
button:hover {
    background-color: var(--color-background-secondary);
}
.navigation-bar-bottom {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
}

@media (max-width: 768px) {
    .side-menu {
        position: fixed;
        left: 0;
        top: 0;
        width: 250px;
        height: 100%;
        padding: 20px;
        display: none;
        transform: translateX(-100%);
        z-index: 10;
        box-shadow: var(--elevation-sm);
        border-radius: var(--border-radius-lg);
    }

    .side-menu.open {
        transform: translateX(0);
        display: block;
    }

    .menu-toggle {
        display: block;
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }
    .close-icon {
        display: flex;
        width: fit-content;
        padding: var(--spacing-xxs);
        cursor: pointer;
    }
    .close-icon:hover {
        border-radius: var(--border-radius-rounded);
        background-color: var(--color-background);
    }

    li.hide-mobile {
        display: none;
    }
}
</style>
