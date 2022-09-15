<template>
    <Card>
        <template #header>
            Выберите ингридиенты
        </template>
        <template #body>
            <div>
                <p>Основной соус: </p>
                <div class="d-flex flex-wrap gap-3">
                    <label v-for="item in pizzaConstructorData.sauces">
                        <input type="radio" name="sauce" :value="item.code" v-model="pizza.selected.sauce">
                        {{item.name}}
                    </label>
                </div>
            </div>
            <div>
                <p>Начинка: </p>
                <div class="ingredients-container">
                    <div v-for="item in pizza.selected.ingredients" :key="item.code" class="d-flex">
                        <img :src="item.image" :alt="item.code" class="ingredient-image">
                        <div>
                            <div class="fw-bold mb-2">{{item.name}}</div>
                            <ItemCount 
                                v-model="item.count"
                                :min="Number(0)"
                            />
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary mt-3" :disabled="pizza.total == 0" @click="pizza.ingredientsReset">Сбросить</button>
            </div>
        </template>
    </Card>
</template>

<script setup>
import Card from '@/elements/Card.vue';
import { usePizzaStore } from '@/store/pizza.js';
import pizzaConstructorData from "@/static/pizza.json";
import ItemCount from '@/elements/ItemCounter.vue'; 

const pizza = usePizzaStore();
</script>

<style scoped>
    .ingredients-container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 20px;
    }
    .ingredient-image{
        width: 35px;
    }
    .btn-container{
        display: grid;
        grid-template-columns: repeat(3, min-content);
        grid-column-gap: 10px;
    }
    .btn-count{
        background-color: var(--green);
        color: white;
    }
</style>