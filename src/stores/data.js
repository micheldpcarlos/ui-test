import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import data from '../data/data.json';

export const useDataStore = defineStore('data', () => {
  const items = ref(data);

  const saveVote = (id, like) => {

    const itemIndex = items.value.findIndex(item => item.id === id);
    items.value[itemIndex].votes[like ? 'positive' : 'negative'] += 1;


  };

  return { items, saveVote };
});
