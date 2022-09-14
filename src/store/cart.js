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
        pizza.count = pizza?.count ?? 1;
        cart.value.push(JSON.parse(JSON.stringify(pizza)));
    }

    return {total, cart, info, cart_append};
});