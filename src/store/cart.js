import { defineStore } from 'pinia'
import { ref, computed, toRaw } from 'vue';

export const useCartStore = defineStore('cart', () => {

    const cart = ref([]);
    const info = ref({
        receiving_order: "pick_up",
        phone: "",
        street: "",
        home: "",
        flat: "",
    });

    const total = computed(() => {
        return cart.value.reduce((prev, current) => {
            return prev + (current.total * current.count);
        }, 0);
    })

    const cart_append = (pizza) => {
        cart.value.push(JSON.parse(JSON.stringify({count: 1, ...pizza.selected, total: pizza.total})));
    }

    return {total, cart, info, cart_append};
});