<template>
    <form method="post" @submit.prevent="send">
        <div class="p-3">
            <h1>Корзина</h1>
            <div class="mb-3">
                <div v-if="cart.cart.length" class="d-flex flex-column gap-3">
                    <div v-for="(item, index) in cart.cart" :key="item.name" class="card card-body">
                        <div class="row align-items-start">
                            <div class="col-8 d-flex">
                                <img src="/src/assets/img/product.svg" alt="pizza" width="80" class="me-3">
                                <div>
                                    <div class="fw-bold">{{item.name}}</div>
                                    <div>
                                        <div>{{pizzaConstructorData.sizes.find(el => el.code == item.size).name}}, на
                                            {{pizzaConstructorData.sauces.find(el => el.code ==
                                            item.sauce).declinations.on}} тесте</div>
                                        <div>Соус: {{pizzaConstructorData.sauces.find(el => el.code ==
                                        item.sauce).name.toLowerCase()}}</div>
                                        <div>Начинка: {{ingredients_to_string(item.ingredients)}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex align-items-center">
                                <button type="button" class="btn-count" @click="item.count--"
                                    :disabled="item.count < 2">-</button>
                                <div class="fs-4 fw-bold mx-2">{{item.count}}</div>
                                <button type="button" class="btn-count" @click="item.count++">+</button>
                            </div>
                            <div class="col fw-bold fs-4">
                                {{item.total * item.count}} ₽
                            </div>
                            <div class="col">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light"
                                        @click="editPizza(index, item)">Изменить</button>
                                    <button type="button" class="btn btn-danger"
                                        @click="deletePizza(index)">Удалить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="card card-body">В корзине нет ни одного товара</div>
            </div>
            <div class="row">
                <div class="col d-flex align-items-center">
                    <b class="text-nowrap me-3">Получение заказа:</b>
                    <select class="form-select" v-model="cart.info.receiving_order" required>
                        <option value="pick_up">Заберу сам</option>
                        <option value="delivery">Доставка</option>
                    </select>
                </div>
                <div class="col d-flex align-items-center">
                    <b class="text-nowrap me-3">Контактный телефон: </b>
                    <input type="phone" class="form-control" v-model="cart.info.phone" required>
                </div>
            </div>
            <div class="row mt-3 align-items-center" v-if="cart.info.receiving_order == 'delivery'">
                <div class="col-1">
                    <b class="text-nowrap me-3">Новый адрес: </b>
                </div>
                <div class="col">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="street" placeholder="Введите улицу"
                            v-model="cart.info.street" required>
                        <label for="street">Улица<sup>*</sup></label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="home" placeholder="Введите дом"
                            v-model="cart.info.home" required>
                        <label for="home">Дом<sup>*</sup></label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="flat" placeholder="Введите квартиру"
                            v-model="cart.info.flat" required>
                        <label for="flat">Квартира<sup>*</sup></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-success bg-opacity-25 px-5 py-3 d-flex justify-content-between align-items-center">
            <div class="d-flex gap-3">
                <router-link :to="{name:'home'}" class="btn btn-outline-success d-flex align-items-center">
                    <img src="/src/assets/img/button-arrow.svg" alt="button-arrow" class="me-2">
                    <div class="text-dark fw-bold">Хочу еще одну</div>
                </router-link>
                <div class="info text-muted">
                    Перейти к конструктору чтоб собрать еще одну пиццу
                </div>
            </div>
            <div class="d-flex gap-4">
                <h3 class="mb-0">Итого: {{cart.total}} ₽</h3>
                <button class="btn btn-success" type="submit" :disabled="cart.cart.length == 0">Оформить заказ</button>
            </div>
        </div>
    </form>

    <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="text-center">
                        <h1>Спасибо за заказ</h1>
                        <div>Мы начали готовить Ваш заказ,</div>
                        <div v-if="cart.info.receiving_order == 'delivery'">скоро привезём его вам ;)</div>
                        <div v-else>ожидайте оповещения о готовности ;)</div>
                        <button type="button" class="btn btn-success mt-3" data-bs-dismiss="modal">Отлично, я жду!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
import { usePizzaStore } from '@/store/pizza';
import pizzaConstructorData from "@/static/pizza.json";
import { reactive } from 'vue';
import router from '@/router.js'

const cart = useCartStore();
const pizza = usePizzaStore();

const ingredients_to_string = (ingredients) => {
    return ingredients
        .filter(item => item.count > 0)
        .map(item => {
            return item.name.toLowerCase();
        }).join(', ');
}

const editPizza = (index, item) => {
    // console.log(item.ingredients[0].count)
    pizza.selected = item;
    cart.cart.splice(index, 1);

    router.push({name:"home"});
};

const deletePizza = index => {
    cart.cart.splice(index, 1);
};

const send = () => {
    const modal = new bootstrap.Modal('#orderModal')
    modal.show();
};
</script>

<style scoped>
.info {
    width: 210px;
    font-size: 15px;
}

.btn-count {
    background-color: orange;
}
</style>