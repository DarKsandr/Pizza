<template>
    <div class="row g-3 p-3">
        <div class="col-12">
            <h1>Конструктор пиццы</h1>
        </div>
        <div class="col-7">
            <DoughType />
        </div>
        <div class="col-5">
            <SizeType />
        </div>
        <div class="col-7">
            <IngredientType />
        </div>
        <div class="col-5">
            <PizzaType />
            <div class="d-flex gap-3 align-items-center justify-content-end">
                <h3>Итого: {{pizza.total}} ₽</h3>
                <button type="button" class="btn btn-success"
                    :disabled="pizza.total == 0 || pizza.selected.name == ''"
                    @click="cart_append">Готовьте!</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import DoughType from '@/components/DoughType.vue'
import SizeType from '@/components/SizeType.vue'
import IngredientType from '@/components/IngredientType.vue'
import PizzaType from '@/components/PizzaType.vue'
import { useCartStore } from '@/store/cart.js';
import router from '@/router.js'
import { usePizzaStore } from '@/store/pizza.js';

const pizza = usePizzaStore();
const cart = useCartStore();

const cart_append = async () => {
    cart.cart_append(pizza);
    pizza.allReset();
    router.push({ name: "cart" });
}
</script>