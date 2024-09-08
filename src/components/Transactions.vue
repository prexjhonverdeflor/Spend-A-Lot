<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in props.transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>₱{{ formatNumber(transaction.amount) }}</span>
      <button @click="deleteTransaction(transaction.id)" class="delete-btn">
        <i class="fas fa-trash-alt"></i>
      </button>
    </li>
  </ul>
</template>


<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  }
});

const emit = defineEmits(['transactionDeleted']);

// Function to format numbers with commas
const formatNumber = (value) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const deleteTransaction = (id) => {
  emit('transactionDeleted', id);
}
</script>
