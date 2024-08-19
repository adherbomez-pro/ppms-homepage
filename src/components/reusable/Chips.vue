<script setup lang="ts">
import AccountIcon from '../icons/AccountIcon.vue';
import LoadingIcon from '../icons/LoadingIcon.vue';
import ValidateIcon from '../icons/ValidateIcon.vue';
import BlockIcon from '../icons/BlockIcon.vue';
import { RequestStatus } from '../../types/enum';
import Vue from 'vue';

interface StatusConfig {
    icon: Vue.Component;
    color: string;
    text: string;
}

const StatusProperties: Record<RequestStatus, StatusConfig> = {
    [RequestStatus.PENDING]: {
        icon: LoadingIcon,
        color: 'var(--color-warning)',
        text: 'chips.pending',
    },
    [RequestStatus.APPROVED]: {
        icon: ValidateIcon,
        color: 'var(--color-success)',
        text: 'chips.approved',
    },
    [RequestStatus.REJECTED]: {
        icon: BlockIcon,
        color: 'var(--color-error)',
        text: 'chips.rejected',
    },
    [RequestStatus.PENDING_APPROVAL]: {
        icon: AccountIcon,
        color: 'var(--color-warning)',
        text: 'chips.pending_approval',
    },
};
const props = defineProps({ value: String });
const { icon, text, color } = StatusProperties[props.value as RequestStatus];
</script>

<template>
    <div class="chips-content">
        <component :is="icon" />
        <div>{{ $t(text) }}</div>
    </div>
</template>

<style scoped>
.chips-content {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: var(--spacing-xxs);
    color: var(--color-text-chips);
    padding: var(--spacing-xs) var(--spacing-sm);
    background-color: v-bind('color');
    border-radius: var(--border-radius-rounded);
}
</style>
