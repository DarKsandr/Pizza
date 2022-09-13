<template>
    <header>
        <div>
            <img src="src\assets\img\logo.svg" alt="Logo">
        </div>
        <div class="cart">
            <img src="src\assets\img\cart.svg" alt="">
            <div>{{cart.total}} ₽</div>
        </div>
    </header>
    <main>
        <router-view></router-view>
    </main>
</template>

<script setup>
    import {useCartStore} from '@/store/cart.js'
    const cart = useCartStore();
</script>

<style>
    header{
        background-color: #41B619;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        color: white;
        font-weight: bold;
    }
    .cart{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    main{
        padding: 10px 20px;
    }
</style>