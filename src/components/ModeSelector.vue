<script setup>
import { ref } from 'vue'

const model = defineModel()
const open = ref(false)

const setSelection = (mode) => {
  model.value = mode
  open.value = false
}
</script>

<template>
  <div class="mode-selector" :class="{ 'mode-selector--open': open }" @blur="open = false">
    <div class="mode-selector__selected" @click="open = !open">
      {{ model }}
    </div>
    <div class="mode-selector__items" :class="{ 'mode-selector__items--hidden': !open }">
      <div class="mode-selector__item" @click="setSelection('list')">List</div>
      <div class="mode-selector__item" @click="setSelection('grid')">Grid</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mode-selector {
  position: relative;
  text-align: center;
  outline: none;
  font-size: 12px;
  z-index: 9999;
  width: 173px;
  height: 36px;

  &__selected,
  &__item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-white);
    color: var(--color-darker-gray);
    border-radius: 0;

    border: 2px solid var(--color-black);

    cursor: pointer;
    user-select: none;
    text-transform: capitalize;
  }

  &__selected {
    position: relative;
    border-color: var(--color-darker-gray);

    &::after {
      content: '';
      position: absolute;
      top: 40%;
      right: 1rem;
      width: 0;
      height: 0;
      border-left: 5.25px solid transparent;
      border-right: 5.25px solid transparent;
      border-top: 7px solid var(--color-darker-gray);
    }
  }

  &--open &__selected {
    &::after {
      transform: rotate(180deg) translateY(3px);
      transform-origin: center;
    }
  }

  &__items {
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 0;

    &--hidden {
      display: none;
    }
  }

  &__item {
    height: 36px;
    border-top: 0;

    &:hover {
      background-color: var(--color-light-gray);
    }
  }
}
</style>
