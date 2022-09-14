import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import pizzaConstructorData from "@/static/pizza.json";

export const usePizzaStore = defineStore("pizza", () => {
  const selected = reactive({
    name: "",
    dough: "light",
    size: "small",
    sauce: "tomato",
    ingredients: pizzaConstructorData.ingredients.map(item => {
        item.count = 0;
        return item;
    }),
    total: computed(() => {
      const ingredients = selected.ingredients.reduce((previousValue, currentValue, currentIndex, array) => {
          return previousValue + (currentValue.price * currentValue.count)
      }, 0);
      if(ingredients == 0) return 0;
  
      const dough = pizzaConstructorData.dough.find(item => item.code == selected.dough).price;
      const size = pizzaConstructorData.sizes.find(item => item.code == selected.size).multiplier;
      const sauce = pizzaConstructorData.sauces.find(item => item.code == selected.sauce).price;
      
      return (dough + sauce + ingredients) * size;
    }),
  });

  const ingredientsReset = () => {
    selected.ingredients.forEach(item => {
        item.count = 0;
    })
  }

  const nameReset = () => {
    selected.name = "";
  }

  const allReset = () => {
    ingredientsReset();
    nameReset();
  }

  return { selected, ingredientsReset, nameReset, allReset };
});
