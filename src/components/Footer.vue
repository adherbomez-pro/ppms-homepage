<script setup lang="ts">
import InformationIcon from '../components/icons/InformationIcon.vue';
const logoPath = 'public/logo_name.png';
</script>

<template>
    <footer>
        <a href="" class="contact-us">
            <InformationIcon />
            {{ $t('footer.contact-us') }}
        </a>
        <img :src="logoPath" alt="Logo" />
        <p>{{ $t('footer.version') }}</p>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-sm) var(--spacing-md);
    a,
    p {
        font-size: var(--font-size-sm);
        color: var(--color-text-body);
        margin: 0;
    }
    img {
        padding: 8px;
        border-radius: 16px;
        background-color: #fff;
    }
}
@media (max-width: 768px) {
    footer {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }
    footer > * {
        margin: var(--spacing-xs);
    }
}
</style>
