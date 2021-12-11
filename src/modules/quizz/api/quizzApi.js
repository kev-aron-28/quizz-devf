import axios from "axios";

const quizzApi = axios.create({
    baseURL: 'https://opentdb.com'
})
export default quizzApi