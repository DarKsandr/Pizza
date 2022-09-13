<template>
    <h1>Конструктор пиццы</h1>
    <div class="row">
        <div class="col-7">
            <DoughType/>
        </div>
        <div class="col-5">
            <SizeType/>
        </div>
    </div>
    
</template>
<script setup>
import DoughType from '@/components/DoughType.vue'
import SizeType from '@/components/SizeType.vue'
</script>
<style>
    
</style>