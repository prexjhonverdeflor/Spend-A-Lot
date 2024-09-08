<template>
  <div>
    <h3>Add new transactions</h3>
    <form id="form" @submit.prevent="onSubmit">
      <div class="form-control">
        <label for="text">Title</label>
        <input type="text" id="text" v-model="text" placeholder="Enter title..." class="rounded-input"/>
      </div>
      <div class="form-control">
        <label for="amount">Amount <br/>
        (negative - expense, positive - income)
        </label>
        <input type="number" id="amount" v-model="amount" placeholder="Enter amount..." class="rounded-input"/>
      </div>
      <button class="bn632-hover bn18">Add Transactions</button>
    </form>
  </div>
</template>



<script setup>
import {ref} from 'vue';
import { useToast } from 'vue-toastification';

  const text = ref('');
  const amount = ref('');

  const emit = defineEmits(['transactionSubmitted']);
  const toast = useToast();

  const onSubmit = () => {
    if (!text.value || !amount.value) {
      toast.error('Both fields must be filled');
      return
    }
    const transactionData = {
      text: text.value,
      amount: parseFloat(amount.value)
    }
    emit('transactionSubmitted', transactionData);

    text.value ='';
    amount.value ='';
  }
</script>




<style scoped>
.form-control {
  margin-bottom: 1rem;
}

.form-control label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.rounded-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 15px; /* Makes the input fields rounded */
  box-sizing: border-box;
}

</style>