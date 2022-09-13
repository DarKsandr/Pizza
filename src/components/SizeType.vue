<template>
    <Card>
        <template #header>
            Выберите размер
        </template>
        <template #body>
            <div class="d-flex gap-3">
                <label v-for="item in pizza.size_type.items" :key="item.size" class="card-item size-type">
                    <input type="radio" :hidden="true" name="size" :value="item.size" v-model="pizza.size_type.active">
                    <img src="src/assets/img/diameter.svg" alt="size" :class="{'card-item--active': item.size == pizza.size_type.active}">
                    <div>{{item.size}} см</div>
                </label>
            </div>
        </template>
    </Card>
</template>

<script setup>
    import Card from '@/elements/Card.vue';
    import { usePizzaStore } from '@/store/pizza';

    const pizza = usePizzaStore();
</script>