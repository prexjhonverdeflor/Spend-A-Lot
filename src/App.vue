<template>
  <Header/>
  <div class="container">
    <Balance :total="+total"/>
    <Income :income="+income" :expenses="+expenses"/>
    <Transactions :transactions="transactions" @transactionDeleted="handleTransactionDeleted"/>

    <button class="bn632-hover bn18" @click="showModal = true">Add New</button>
    <Modal :show="showModal" @close="showModal = false">
      <Add @transaction-submitted="handleTransactionSubmitted" />
    </Modal>
  </div>
</template>


<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import Income from './components/Income.vue';
import Transactions from './components/Transactions.vue';
import Add from './components/Add.vue';
import { useToast } from 'vue-toastification';

import Modal from './components/Modal.vue';

import { ref, computed, onMounted } from 'vue';

const toast = useToast();
const showModal = ref(false);

const transactions = ref ([

  ]);

  onMounted(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

    if(savedTransactions) {
      transactions.value = savedTransactions;
    }
  });


//Get total
  const total = computed(() => {
    return transactions.value.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
  });


// Get income
const income = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
});

// Get expenses
const expenses = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
});

// add
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount
  });

  showModal.value = false;
  saveTransactionsToLocalStorage();
  toast.success('Transaction added');
}

//generate id
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
}

//delete
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);

  saveTransactionsToLocalStorage();
  toast.error('Transaction deleted')
}

//save to storage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>