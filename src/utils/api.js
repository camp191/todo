import axios from 'axios'

let host = 'http://localhost:3000/'

export default {
    fetchTodo: (todos) => {
        let encodeURI = window.encodeURI( host + 'todos')

        return axios.get(encodeURI)
            .then((response) => {
                return response.data.todos
            })
    },

    deleteTodo: (todoId) => {
        let encodeURI = window.encodeURI( host + 'todos/' + todoId)

        return axios.delete(encodeURI)
            .then((response) => {
                return response.data.todo
            })

    },

    createTodo: (todoName) => {
        let encodeURI = window.encodeURI( host + 'todos')

        return axios.post(encodeURI, {
            text: todoName
        })
        .then((response) => {
            return response.data
        })
    }
}