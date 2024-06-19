<script setup>
import { onMounted, ref, watch } from 'vue'
import ModeSelector from '@/components/ModeSelector.vue'
import { useWindowSize } from '@vueuse/core'

import data from '../data/data.json'
import VoteItem from '@/components/VoteItem.vue'
const { width } = useWindowSize()

const selectedViewMode = ref('list')

watch(
  width,
  (newValue) => {
    if (newValue < 768) selectedViewMode.value = 'grid'
  },
  { immediate: true }
)
</script>

<template>
  <div class="previous-rulings">
    <div class="previous-rulings__header">
      <h2>Previous Rulings - {{ selectedViewMode }}</h2>
      <ModeSelector v-model="selectedViewMode" class="previous-rulings__selector" />
    </div>
    <div class="previous-rulings__items">
      <VoteItem v-for="item in data" :vote-item="item" :key="item.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.previous-rulings {
  &__header {
    position: relative;
  }

  .previous-rulings__selector {
    display: none;
  }

  &__items {
    display: flex;
    overflow: auto;
    gap: 1rem;
    margin-right: -1rem;
  }
}

@media all and (min-width: 768px) {
  .previous-rulings {
    .previous-rulings__selector {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
