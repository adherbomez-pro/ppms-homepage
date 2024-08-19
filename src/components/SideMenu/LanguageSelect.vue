<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { availablesLocales } from '../../utils/i18n';
import { savePreferences, store } from '../../utils/store';
import ChevronIcon from '../icons/ChevronIcon.vue';
import LanguageIcon from '../icons/LanguageIcon.vue';

const deployed = ref(false);
const t = useI18n();
const handleLangChange = (code: string) => {
    t.locale.value = code;
    store.userPreferences.locale = code;
    savePreferences();
};

onMounted(() => {
    t.locale.value = store.userPreferences.locale;
});
</script>

<template>
    <div class="container">
        <div class="header" @click="() => (deployed = !deployed)">
            <div class="title">
                <LanguageIcon size="22px" />
                <p class="small-text">{{ $t('menu.language') }}</p>
            </div>
            <ChevronIcon :class="{ 'icon-deployed': deployed }" />
        </div>
        <ul v-show="deployed">
            <li
                v-for="{ code, name } in availablesLocales"
                :key="code"
                @click="() => handleLangChange(code)"
            >
                <p class="small-text">{{ code }} - {{ name }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    user-select: none;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--font-nav-item);
}

.header:hover,
li:hover {
    background-color: var(--color-nav-hover);
    border-radius: var(--border-radius-rounded);
}

.title {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
}

.small-text {
    color: var(--color-text-header);
    margin: 0;
}

.icon-deployed {
    transition: 0.3s var(--transition-ease);
    transform: rotate(-180deg);
}
button {
    background-color: transparent;
    color: var(--color-text-header);
}

button:hover {
    background-color: var(--color-nav-hover);
}

ul {
    margin: 0;
    padding: 0;
}

li {
    padding: var(--font-nav-item);
    list-style-type: none;
    p {
        text-transform: uppercase;
    }
}
</style>
