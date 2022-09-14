import { defineStore } from "pinia";
import { ref, computed } from "vue";
import pizzaConstructorData from "@/static/pizza.json";

export const usePizzaStore = defineStore("pizza", () => {
  const selected = ref({
    name: "",
    dough: "light",
    size: "small",
    sauce: "tomato",
    ingredients: pizzaConstructorData.ingredients.map((item) => {
      item.count = 0;
      return item;
    }),
    total: computed(() => {
      const ingredients = selected.value.ingredients.reduce(
        (previousValue, currentValue, currentIndex, array) => {
          return previousValue + currentValue.price * currentValue.count;
        },
        0
      );
      if (ingredients == 0) return 0;

      const dough = pizzaConstructorData.dough.find(
        (item) => item.code == selected.value.dough
      ).price;
      const size = pizzaConstructorData.sizes.find(
        (item) => item.code == selected.value.size
      ).multiplier;
      const sauce = pizzaConstructorData.sauces.find(
        (item) => item.code == selected.value.sauce
      ).price;

      return (dough + sauce + ingredients) * size;
    }),
  });

  const ingredientsReset = () => {
    selected.value.ingredients.forEach((item) => {
      item.count = 0;
    });
  };

  const nameReset = () => {
    selected.value.name = "";
  };

  const allReset = () => {
    ingredientsReset();
    nameReset();
  };

  return { selected, ingredientsReset, nameReset, allReset };
});
