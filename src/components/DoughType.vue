<template>
    <Card>
        <template #header>
            Выберите тесто
        </template>
        <template #body>
            <div class="d-flex gap-4">
                <label v-for="item in pizza.dough_type.items" :key="item.type" class="card-item dough-type">
                    <input type="radio" name="dought-type" :value="item.type" :hidden="true"
                        v-model="pizza.dough_type.active">
                    <img :src="item.img" alt="dough" :class="{'card-item--active': item.type == pizza.dough_type.active}">
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
    const pizza = usePizzaStore();
</script>