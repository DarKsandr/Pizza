import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {

    const total = ref(0);

    return {total};
});