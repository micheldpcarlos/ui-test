<script setup>
import { ref, watch } from 'vue'
import ModeSelector from '@/components/ModeSelector.vue'
import { useWindowSize } from '@vueuse/core'

import VoteItem from '@/components/VoteItem.vue'
import { useDataStore } from '@/stores/data'
const { width } = useWindowSize()

const selectedViewMode = ref('list')

const store = useDataStore()

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
      <h2>Previous Rulings</h2>
      <ModeSelector v-model="selectedViewMode" class="previous-rulings__selector" />
    </div>
    <div
      class="previous-rulings__items"
      :class="{ 'previous-rulings__items--list': selectedViewMode === 'list' }"
    >
      <VoteItem
        v-for="item in store.items"
        :vote-item="item"
        :mode="selectedViewMode"
        :key="item.id"
      />
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
    padding-right: 12px;
  }
}

@media all and (min-width: 768px) {
  .previous-rulings {
    &__selector {
      display: block !important;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      margin-right: 0;
      padding-right: 0;

      &--list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
  }
}

@media all and (min-width: 1100px) {
  .previous-rulings {
    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-right: 0;

      &--list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
  }
}
</style>
