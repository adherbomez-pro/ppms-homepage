<script setup lang="ts">
import SectionComponent from './SectionComponent.vue';
</script>

<template>
    <main>
        <div class="wrapper">
            <SectionComponent />
        </div>
    </main>
</template>

<style>
main {
    padding: 20px;
    min-height: 75vh;
    border-radius: 16px;
    color: var(--color-text-header);
    background-color: var(--color-background);
}

.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: var(--spacing-md);
}

@media (max-width: 768px) {
    .wrapper {
        grid-template-columns: 1fr;
    }
}
</style>
