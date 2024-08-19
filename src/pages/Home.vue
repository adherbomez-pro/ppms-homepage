<script setup lang="ts">
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Main from '../components/Main/Main.vue';
</script>
<template>
    <div class="content">
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<style scoped>
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 260px;
}
@media (max-width: 768px) {
    .content {
        margin-left: 0;
    }
}
</style>
