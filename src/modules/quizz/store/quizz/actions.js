import quizzApi from '../../api/quizzApi';

const getQuizz = async ({ commit }, options) => {
    const { data } = await quizzApi.get('/api.php', {
        params: { ...options }
    })
    commit('setQuizz', data.results)
    return [...data.results]
}

export {
    getQuizz
}