<script setup>
import { ref } from 'vue'

defineProps(['voteItem'])
</script>

<template>
  <div class="vote-item">
    <img class="vote-item__picture" :src="`/pictures/${voteItem.picture}`" />
  </div>
</template>

<style lang="scss" scoped>
.vote-item {
  width: 300px;
  height: 300px;
  flex: 0 0 auto;
  position: relative;

  &__picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
