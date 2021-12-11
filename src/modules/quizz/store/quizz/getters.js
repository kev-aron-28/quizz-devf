const getQuestionById = (state) => (id) => {
    return state.quizz[id]
}

const allQuestions = (state) => {
    return state.quizz
}

export {
    getQuestionById,
    allQuestions
}