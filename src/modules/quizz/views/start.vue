<template>
    <div class="d-flex align-items-center flex-column start-container">
        <header class="d-flex align-items-center justify-content-center text-white w-100">
            <h1>Quizz with Vue js</h1>
        </header>
        <h2 class="mt-2">Choose options:</h2>
        <main class="d-flex align-items-center justify-content-around flex-column">
            <div class="w-100">
                <label for="difficulty">Chosee difficulty:</label>
                <select name="difficulty" class="form-select w-100" v-model="dif" aria-label="Default select example">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div class="w-100">
                <label for="category">Chosee category:</label>
                <select name="trivia_category" class="form-control" v-model="category">
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="32">Entertainment: Cartoon &amp; Animations</option>		
                </select>
            </div>
            <div class="w-100 d-flex justify-content-around flex-column">
                <label for="questions">Number of questions(50 max):</label>
                <input type="number" class="form-number" min="1" max="50" v-model="numOfQuestions">
            </div>
            <div class="w-100">
                <label for="type">Type of questions:</label>
                <select class="form-select w-100" aria-label="Default select example" v-model="type">
                    <option value="boolean">True/false</option>
                    <option value="multiple">Multiple chooise</option>
                </select>
            </div>
            <button class="btn btn-primary w-100" type="button" @click="createQuizz">Start quizz</button>
        </main>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {

        const router = useRouter()


        const type = ref()
        const numOfQuestions = ref(10)
        const dif = ref()
        const data = {}
        const category = ref()

        const createQuizz = () => {
            if(category.value) data.category = category.value
            if(dif.value) data.difficulty = dif.value 
            if(numOfQuestions.value) data.amount = numOfQuestions.value
            if(type.value) data.type = type.value 
            console.log(JSON.stringify(data))
            router.push( { name: 'questions-quizz', params: { options: JSON.stringify(data) } } )               
        }


       return {
           type,
           numOfQuestions,
           dif,
           createQuizz,
           category,
       }
    }
}
</script>

<style lang="scss" scoped>

    .start-container {
        width: 100%;
        height: 100vh;
    }

    header {
        height: 16%;
        background-color: #457B9D;
    }

    main {
        width: 50%;
        height: 75%;
    }

    
</style>