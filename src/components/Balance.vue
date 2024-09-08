<template>
  <h4 class="balance-h4">Balance</h4>
  <h1 id="balance">₱{{ new Intl.NumberFormat('en-US').format(props.total) }}</h1>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    required: true,
  }
});
</script>
