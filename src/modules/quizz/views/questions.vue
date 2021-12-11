<template>
  <div v-if="!isLoading" class="content d-flex align-items-center justify-content-between flex-column">
      <header class="d-flex aling-items-center justify-content-around">
      <div class="d-flex align-items-center text-white">
        <h4>{{idx + 1}}/{{getLength}}</h4>
      </div>
      <div class="d-flex align-items-center text-white text-center">
        <h3>{{currentQuestion.category}}</h3>
      </div>
    </header>

    <main class="w-75 d-flex align-items-center justify-content-around flex-column">
      <div class="question">
        <h4 v-html="currentQuestion.question" class="text-center"></h4>
      </div>
      <Options :options="sOptions" @option="checkAnswer"/>
    </main>
  </div>


  <div class="loader" v-if="isLoading">
    <div class="spinner-border text-secondary " style="width: 100px; height: 100px;"  role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  
</template>

<script>
import Swal from 'sweetalert2'
import {  computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import randomize from '../helpers/randomize'
import Options from '../components/options.vue'
export default {
  props: {
    options: {
      default: () => '{"amount":10}'
    }
  },
  setup(props) {
    const store = useStore()
    const router= useRouter()

    const questions = ref()
    const isLoading = ref(true)
    const idx = ref(0)
    const correctAnswers = ref(0)
    const wrongAnswers = ref(0)
    const getQuizz = async () => {
        isLoading.value = true
        try {
          questions.value = await store.dispatch('quizzModule/getQuizz', JSON.parse(props.options))
        } catch (e) {
          router.push({ name: 'options-quizz' })
        }
        isLoading.value = false
    }
    
    const checkAnswer = (ans) => {
      console.log(ans)
      if(idx.value < questions.value.length - 1){
        if(ans === questions.value[idx.value].correct_answer){
          Swal.fire({
            title: 'Correct',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
          correctAnswers.value++
        } else {
          Swal.fire({
            title: 'You botched',
            icon: 'error',
            confirmButtonText: 'Continue'
          })
          wrongAnswers.value++
        }
        idx.value++
      } else {
        Swal.fire({
            title: 'You finished the quizz with: ',
            text: `Correct: ${correctAnswers.value} | Incorrect: ${wrongAnswers.value}`,
            icon: 'info',
            confirmButtonText: 'Continue'
          })
        router.push({ name: 'options-quizz' })
      }
    }


    getQuizz()
    


    return {
      isLoading,
      currentQuestion: computed(() => questions.value[idx.value]),
      getLength: computed(() => questions.value.length),
      idx,
      checkAnswer,
      sOptions: computed(() => randomize([...questions.value[idx.value].incorrect_answers, questions.value[idx.value].correct_answer]))
    }

  },

  components: {
    Options
  }
}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 20%;
    background-color: #1D3557;
  }

  main {
    height: 80%;
  }

  .content {
    width: 100%;
    height: 100vh;
  }

  .loader {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>