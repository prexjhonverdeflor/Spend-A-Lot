<template>
  <div v-if="props.show" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">
        <i class="fas fa-times"></i>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define props
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  }
});

// Define emits
const emit = defineEmits(['close']);

// Function to close the modal
const closeModal = () => {
  emit('close');
}
</script>

<style scoped>
.modal-overlay {
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  position: relative;
  max-width: 550px;
  width: 100%;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
