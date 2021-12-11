<template>
  <div class="d-flex align-items-center justify-content-around flex-column w-100 h-50">
    <button class="option w-75 text-center"  :disabled="emited" v-for="(option, idx) in options" :key="idx" @click="emitData(option)">
      <span>{{ option }}</span>
    </button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  emits: ['option'],
    props: {
        options: {
            type: Array,
            required: true
        }
    },
  setup(_, { emit }) {
    const emited = ref(false)
    const emitData = (option) => {
      emit('option', option)
      emited.value = true
      setTimeout(() => {
        emited.value = false
      }, 300);
    }
    return {
      emited,
      emitData
    }
  }
}
</script>

<style lang="scss" scoped>
  .option {
    width: 100%;
    height: 50px;
    background-color: #F1FAEE;
  }
</style>