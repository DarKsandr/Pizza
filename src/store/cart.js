import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {

    const cart = reactive([]);
    const info = reactive({
        receiving_order: "pick_up",
        phone: "",
        street: "",
        home: "",
        flat: "",
    });

    const total = computed(() => {
        return cart.reduce((prev, current) => {
            return prev + (current.total * current.count);
        }, 0);
    })

    const cart_append = (pizza) => {
        const prepare = JSON.parse(JSON.stringify(pizza));
        prepare.count = 1;
        cart.push(prepare);
    }

    return {total, cart, info, cart_append};
});