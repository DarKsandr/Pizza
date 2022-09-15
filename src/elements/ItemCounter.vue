<template>
    <div class="col d-flex align-items-center">
        <button type="button" class="btn-count" @click="addValue(-1 * step)">-</button>
        <div class="mx-2">{{modelValue}}</div>
        <button type="button" class="btn-count" @click="addValue(step)">+</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: {
        type: Number,
        default: 0,
    },
    step: {
        type: Number,
        default: 1,
    },
    min: {
        type: Number,
        default: -Infinity,
    },
    max: {
        type: Number,
        default: +Infinity,
    },
    variant: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(['update:modelValue']);

const fitLimits = (value) => {
    if (value < props.min) return props.min;
    if (value > props.max) return props.max;
    return value;
};
const addValue = (value = 0) => {
    emit('update:modelValue', fitLimits(props.modelValue + value));
};
</script>