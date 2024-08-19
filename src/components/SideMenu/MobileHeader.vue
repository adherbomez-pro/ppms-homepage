<script setup lang="ts">
import { store } from '../../utils/store';
import AccountIcon from '../icons/AccountIcon.vue';
import MenuIcon from '../icons/MenuIcon.vue';
</script>

<template>
    <div class="menu-toggle">
        <div class="menu-icon" @click="() => (store.sideMenuOpened = true)">
            <MenuIcon />
        </div>
        <div class="account-icon">
            <AccountIcon />
        </div>
    </div>
</template>

<style scoped>
.menu-toggle {
    display: none;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-sm) var(--spacing-md);
        background-color: var(--color-background);
        color: var(--color-text-body);
    }
    .menu-icon,
    .account-icon {
        padding: var(--spacing-xxs);
        cursor: pointer;
    }
    .menu-icon:hover,
    .account-icon:hover {
        border-radius: var(--border-radius-rounded);
        background-color: var(--color-background-secondary);
    }
}
</style>
