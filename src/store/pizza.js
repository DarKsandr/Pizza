import { defineStore } from 'pinia'
import { ref } from 'vue';

export const usePizzaStore = defineStore('pizza', () => {

    const dough_type = ref({
        active: ref("light"),
        items: ref([{
                img: "src/assets/img/dough-light.svg",
                name: "Тонкое",
                description: "Из твердых сортов пшеницы",
                type: "light",
            },
            {
                img: "src/assets/img/dough-large.svg",
                name: "Толстое",
                description: "Из твердых сортов пшеницы",
                type: "large",
            },
        ]),
    });

    const size_type = ref({
        active: ref(23),
        items: ref([
            {
                size: 23,
            },
            {
                size: 32,
            },
            {
                size: 45,
            },
        ]),
    })

    return {dough_type, size_type};
});