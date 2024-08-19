<script setup lang="ts">
import { RequestStatus } from '../../types/enum';
import Chips from '../reusable/Chips.vue';

const props = defineProps({
    label: { type: String, required: true },
    value: { type: String, required: true },
});
const isRequestStatus = Object.values(RequestStatus).includes(props.value as RequestStatus);
</script>

<template>
    <div class="item-list">
        <a href="/ppms-homepage/" class="input-text">{{ label }}</a>
        <Chips v-if="isRequestStatus" :value="value" />
        <p v-else class="value">{{ value }}</p>
    </div>
</template>

<style scoped>
.item-list {
    margin: var(--spacing-md) 0;
}

.item-list .value {
    font-weight: var(--font-weight-light);
    color: var(--color-text-subtitle);
}

.item-list > a {
    margin: 8px 0;
    color: var(--color-text-header);
    cursor: pointer;
}

.item-list > a:hover {
    color: var(--color-primary);
}

.item-list > p {
    margin: var(--spacing-xs) 0;
}
</style>
