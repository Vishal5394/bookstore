import axios from 'axios'

export const login = (acceptdata) => {
    let responce = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login", acceptdata)
    return responce
}

export const signup = (acceptdata) => {
    let responce = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration", acceptdata)
    return responce
}