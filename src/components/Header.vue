<script setup lang="ts">
import OrganizeIcon from '../components/icons/OrganizeIcon.vue';
import { store } from '../utils/store.ts';

const handleClick = () => (store.organizeModalOpened = true);
</script>

<template>
    <header>
        <h1>{{ $t('title.home') }}</h1>
        <button @click="handleClick"><OrganizeIcon /> {{ $t('button.organize') }}</button>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm) var(--spacing-md);
    a,
    p {
        font-size: var(--font-size-sm);
        color: var(--color-text-body);
    }
}
button {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    background-color: var(--color-background);
    color: var(--color-text-header);
    border: 1px solid var(--color-text-body);
}
button:hover {
    background-color: var(--color-background-secondary);
}
</style>
