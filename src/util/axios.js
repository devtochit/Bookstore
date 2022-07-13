import axios from "axios";

const customFetch = axios.create({
    baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/'
})
const id = 'I6mfoYnGeABBcZ3LwXcr'

export { customFetch, id }