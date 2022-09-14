<template>
    <header>
        <div>
            <router-link :to="{ name: 'home'}">
                <img src="/src/assets/img/logo.svg" alt="Logo"/>
            </router-link>
        </div>
        <router-link :to="{ name: 'cart'}" class="cart-link">
            <div class="cart">
                <img src="/src/assets/img/cart.svg" alt="Cart"/>
                <div>{{cart.total}} ₽</div>
            </div>
        </router-link>
    </header>
    <main>
        <router-view></router-view>
    </main>
</template>

<script setup>
import { useCartStore } from '@/store/cart.js'
const cart = useCartStore();
</script>

<style>
header {
    background-color: var(--green);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
}

.cart {
    display: flex;
    align-items: center;
    gap: 10px;
}
.cart-link{
    text-decoration: none!important;
    color: unset;
}
.cart-link:hover{
    color: unset;
}
</style>