<script setup lang="ts">
import Vue, { computed, onMounted, watch } from 'vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';
import SideMenu from './components/SideMenu/SideMenu.vue';
import MobileHeader from './components/SideMenu/MobileHeader.vue';
import OrganizeModal from './components/OrganizeModal.vue';
import { store } from './utils/store.ts';

const routes = new Map<string, Vue.Component>([['/ppms-homepage/', Home]]);

const currentView = computed(() => routes.get(window.location.pathname) || NotFound);

const applyRootClass = () => {
    if (store.userPreferences.darkMode) {
        document.documentElement.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
    }
};

// Watch for changes to darkMode and apply the class to :root
watch(() => store.userPreferences.darkMode, applyRootClass);
onMounted(applyRootClass);
</script>

<template>
    <div :class="['app', { 'dark-theme': store.userPreferences.darkMode }]">
        <OrganizeModal />
        <MobileHeader />
        <SideMenu />
        <component :is="currentView" />
    </div>
</template>

<style scoped>
.app {
    display: flex;
}

@media (max-width: 768px) {
    .app {
        flex-direction: column;
    }
}
</style>
