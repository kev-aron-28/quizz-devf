export default {
    name: 'quizz',
    component: () => import("@/modules/quizz/layouts/quizzLayout.vue"),
    children: [
        {
            path: '',
            name: 'options-quizz',
            component: () => import('../views/start.vue')
        },
        {
            path: 'questions',
            name: 'questions-quizz',
            props: (route) => {
                return { options: route.params.options}
            },
            component: () => import('../views/questions.vue')
        },
        {
            path: 'error',
            name: 'error-quizz',
            component: () => import('../views/error.vue')
        }
    ]
}