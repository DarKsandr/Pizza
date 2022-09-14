<template>
    <Card>
        <template #header>
            Выберите тесто
        </template>
        <template #body>
            <div class="d-flex gap-4 flex-wrap">
                <label v-for="item in pizzaConstructorData.dough" :key="item.code" class="card-item dough-type">
                    <input type="radio" name="dought-type" :value="item.code" :hidden="true"
                        v-model="pizza.selected.dough">
                    <img :src="item.image" alt="dough" :class="{'card-item--active': item.code == pizza.selected.dough}">
                    <div>
                        <div class="fw-bold">{{item.name}}</div>
                        <div>{{item.description}}</div>
                    </div>
                </label>
            </div>
        </template>
    </Card>
</template>
<script setup>
    import Card from '@/elements/Card.vue';
    import { usePizzaStore } from '@/store/pizza.js';
    import pizzaConstructorData from "@/static/pizza.json";

    const pizza = usePizzaStore();
</script>