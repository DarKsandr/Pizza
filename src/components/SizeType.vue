<template>
    <Card>
        <template #header>
            Выберите размер
        </template>
        <template #body>
            <div class="d-flex flex-wrap gap-3">
                <label v-for="item in pizzaConstructorData.sizes" :key="item.code" class="card-item size-type">
                    <input type="radio" :hidden="true" name="size" :value="item.code" v-model="pizza.selected.size">
                    <img :src="item.image" alt="size" :class="{'card-item--active': item.code == pizza.selected.size}">
                    <div>{{item.name}}</div>
                </label>
            </div>
        </template>
    </Card>
</template>

<script setup>
    import Card from '@/elements/Card.vue';
    import { usePizzaStore } from '@/store/pizza';
    import pizzaConstructorData from "@/static/pizza.json";

    const pizza = usePizzaStore();
</script>