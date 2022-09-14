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
                            <div class="btn-container">
                                <button class="btn-count" type="button" :disabled="item.count == 0" @click="item.count--">-</button>
                                <div>{{item.count}}</div>
                                <button class="btn-count" type="button" @click="item.count++">+</button>
                            </div>
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
        border: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    .btn-count:disabled{
        background-color: #d9d9d9;
        color: grey;
    }
</style>