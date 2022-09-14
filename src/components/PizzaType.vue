<template>
    <div class="d-grid gap-3">
        <input type="text" placeholder="Введите название пиццы" class="form-control" v-model="pizza.selected.name">
        <div class="pizza-container">
            <img v-for="item in pizza.selected.ingredients" :src="`/src/assets/img/filling-big/${item.code}.svg`" :alt="item.code" v-show="item.count > 0" class="pizza-ingredient">

            <img src="/src/assets/img/foundation/big-creamy.svg"    class="pizza-foundation" alt="big-creamy"       v-show="pizza.selected.dough == 'large' && pizza.selected.sauce == 'creamy'">
            <img src="/src/assets/img/foundation/big-tomato.svg"    class="pizza-foundation" alt="big-tomato"       v-show="pizza.selected.dough == 'large' && pizza.selected.sauce == 'tomato'">
            <img src="/src/assets/img/foundation/small-creamy.svg"  class="pizza-foundation" alt="small-creamy"     v-show="pizza.selected.dough == 'light' && pizza.selected.sauce == 'creamy'">
            <img src="/src/assets/img/foundation/small-tomato.svg"  class="pizza-foundation" alt="small-tomato"     v-show="pizza.selected.dough == 'light' && pizza.selected.sauce == 'tomato'">
        </div>
        <div class="d-flex gap-3 align-items-center justify-content-end">
            <h3>Итого: {{pizza.selected.total}} ₽</h3>
            <button type="button" class="btn btn-success" :disabled="pizza.selected.total == 0 || pizza.selected.name == ''" @click="cart_append">Готовьте!</button>
        </div>
    </div>
</template>

<script setup>
    import { usePizzaStore } from '@/store/pizza.js';
    import { useCartStore } from '@/store/cart.js';
    import { nextTick } from 'vue';
    import router from '@/router.js'

    const pizza = usePizzaStore();
    const cart = useCartStore();

    const cart_append = async () => {
        cart.cart_append(pizza.selected);
        await nextTick();
        pizza.allReset();
        router.push({name:"cart"});
    }
</script>

<style scoped>
    .pizza-container{
        position: relative;
        display: flex;
        justify-content: center;
    }
    .pizza-foundation{
        z-index: 1;
    }
    .pizza-ingredient{
        position: absolute;
        z-index: 2;
    }
</style>