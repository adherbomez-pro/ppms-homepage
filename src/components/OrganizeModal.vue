<script setup lang="ts">
import { savePreferences, store } from '../utils/store';
import { getDataset } from '../config/dataset';
import CloseIcon from './icons/CloseIcon.vue';
import { ref } from 'vue';

const modalContentRef = ref<HTMLDivElement | null>(null);

const submit = () => {
    store.organizeModalOpened = false;
    savePreferences();
};

const handleOverlayClick = (e: Event) => {
    if (!modalContentRef?.value?.contains(e.target as Node)) {
        submit();
    }
};

// Apply section preference on checkbox click
const editSections = (title: string, value: boolean) => {
    if (value) {
        store.userPreferences.dashboardSections.push(title);
    } else {
        store.userPreferences.dashboardSections = store.userPreferences.dashboardSections.filter(
            (elt) => elt != title,
        );
    }
};
</script>

<template>
    <dialog :open="store.organizeModalOpened" @click="handleOverlayClick">
        <div class="modal-content" ref="modalContentRef">
            <div class="modal-header">
                <CloseIcon autofocus @click="() => (store.organizeModalOpened = false)" />
            </div>
            <h1>{{ $t('organize-modal.title') }}</h1>
            <p class="body">{{ $t('organize-modal.description') }}</p>
            <div class="sections-list">
                <div v-for="(section, index) in getDataset()" :key="index">
                    <label class="container">
                        <p>{{ section.title }}</p>
                        <input
                            type="checkbox"
                            :checked="
                                store.userPreferences.dashboardSections.includes(section.title)
                            "
                            @click="
                                (e: Event) =>
                                    editSections(
                                        section.title,
                                        (e.target as HTMLInputElement).checked,
                                    )
                            "
                        />
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <button @click="submit" class="submit">{{ $t('organize-modal.confirm') }}</button>
        </div>
    </dialog>
</template>

<style scoped>
dialog {
    display: none;
}
dialog[open] {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.modal-content {
    height: auto;
    padding: var(--spacing-md) var(--spacing-xl);
    background-color: var(--color-background);
    border-radius: var(--border-radius-lg);
    color: var(--color-text-body);
}

.modal-content p.body {
    margin: 0;
    color: var(--color-text-subtitle);
}

.modal-header {
    display: flex;
    flex-direction: row-reverse;
    cursor: pointer;
}
.modal-header h1 {
    color: var(--color-text-header);
}
.sections-list {
    margin: var(--spacing-xl) 0;
}

.container {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    margin: var(--spacing-sm) 0;
    margin-bottom: var(--spacing-xs);
    cursor: pointer;
    font-size: 22px;
    user-select: none;
}

.container p {
    margin: 2px 0;
}

.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: var(--border-radius-md);
    height: var(--checkbox-size);
    width: var(--checkbox-size);
    background-color: var(--color-checkbox-unchecked);
}

.container:hover input ~ .checkmark {
    background-color: var(--color-checkbox-unchecked);
}

.container input:checked ~ .checkmark {
    background-color: var(--color-checkbox-checked);
}

.checkmark:after {
    content: '';
    position: absolute;
    display: none;
}

.container input:checked ~ .checkmark:after {
    display: block;
}

.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid var(--color-background);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

button.submit {
    width: 100%;
}
</style>
