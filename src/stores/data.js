import { defineStore } from 'pinia';
import data from '../data/data.json';
import { useStorage } from '@vueuse/core';

export const useDataStore = defineStore('data', () => {
  const items = useStorage('coding-test-vue-michel', data);

  const saveVote = (id, like) => {

    const itemIndex = items.value.findIndex(item => item.id === id);
    items.value[itemIndex].votes[like ? 'positive' : 'negative'] += 1;


  };

  return { items, saveVote };
});
