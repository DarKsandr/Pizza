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
        </div>
    </div>
</template>
<script setup>
import DoughType from '@/components/DoughType.vue'
import SizeType from '@/components/SizeType.vue'
import IngredientType from '@/components/IngredientType.vue'
import PizzaType from '@/components/PizzaType.vue'
</script>