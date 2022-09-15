import { defineStore } from "pinia";
import { ref, computed } from "vue";
import pizzaConstructorData from "@/static/pizza.json";

export const usePizzaStore = defineStore("pizza", () => {
  const selected = ref({
    name: "",
    dough: "light",
    size: "small",
    sauce: "tomato",
    ingredients: [],
  });

  const total = computed(() => {
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
  });

  const ingredientsReset = () => {
    selected.value.ingredients = [];
  };

  const nameReset = () => {
    selected.value.name = "";
  };

  const allReset = () => {
    ingredientsReset();
    nameReset();
  };

  const ingredientsCountUpdate = (item, count) => {
    let index = selected.value.ingredients.findIndex(
      (el) => el.code == item.code
    );
    if (index === -1) {
      const len = selected.value.ingredients.push(
        Object.assign(item, { count })
      );
      index = len - 1;
    } else {
      selected.value.ingredients[index].count += count;
    }
    if (selected.value.ingredients[index].count <= 0) {
      selected.value.ingredients.splice(index, 1);
    }
  };

  const ingredientsFind = (code) => {
    return selected.value.ingredients.find((el) => el.code == code);
  };

  const ingredientsCountGet = (code) => {
    return ingredientsFind(code)?.count ?? 0;
  };

  return {
    selected,
    total,
    ingredientsReset,
    nameReset,
    allReset,
    ingredientsCountUpdate,
    ingredientsFind,
    ingredientsCountGet,
  };
});
