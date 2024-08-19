<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { getDataset } from '../../config/dataset';
import { SectionType } from '../../types/enum';
import { store } from '../../utils/store';
import SectionItem from './SectionItem.vue';
import { computed } from 'vue';
const { t } = useI18n();
const handleEdit = () => alert(t('not_implemented'));

const visibleSections = computed(() =>
    getDataset().filter((section) =>
        store.userPreferences.dashboardSections.includes(section.title),
    ),
);
</script>

<template>
    <div v-if="visibleSections.length === 0" class="empty-message">
        <p>
            {{ $t('dashboard.empty-message') }}
        </p>
    </div>
    <div
        v-for="section in getDataset()"
        :key="section.title"
        class="section-list"
        v-show="store.userPreferences.dashboardSections.includes(section.title)"
    >
        <div class="header-section">
            <h2>
                {{ section.title }}
                {{ section.type != SectionType.PROFILE ? `( ${section.items.length} )` : '' }}
            </h2>
            <button
                v-if="section.type == SectionType.PROFILE"
                class="small-text"
                @click="handleEdit"
            >
                {{ $t('button.edit') }}
            </button>
        </div>
        <SectionItem
            v-for="(item, index) in section.items"
            :key="index"
            :label="item.label"
            :value="item.value"
        />
    </div>
</template>

<style scoped>
.section-list {
    align-self: start;
    padding: var(--spacing-lg);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-md);
}

.section-list > h2 {
    margin: 0;
}

.header-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

button {
    background-color: var(--color-background);
    color: var(--color-primary);
    transition: var(--transition-speed) var(--transition-ease);
}

button:hover {
    color: var(--color-text-header);
}

.empty-message {
    grid-column: 2;
}
</style>
