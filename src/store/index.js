import { createStore } from 'vuex'
import quizzModule from '../modules/quizz/store/quizz'
export default createStore({
  modules: {
    quizzModule
  }
})
