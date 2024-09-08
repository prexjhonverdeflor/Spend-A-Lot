<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+₱{{ formatNumber(props.income) }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">₱{{ formatNumber(props.expenses) }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  }
});

// Function to format numbers with commas
const formatNumber = (value) => {
  return new Intl.NumberFormat('en-US').format(value.toFixed(2));
};
</script>
