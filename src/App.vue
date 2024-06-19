<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import HeroHeader from './components/HeroHeader.vue'
import BannerTop from './components/BannerTop.vue'
import BannerBottom from './components/BannerBottom.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <NavBar />
  <HeroHeader />
  <div class="max-centered">
    <BannerTop />
    <main role="main">
      <RouterView />
    </main>
    <BannerBottom />
    <hr role="separator" />
    <AppFooter />
  </div>
</template>

<style scoped></style>
