import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'
import TodoAdd from './TodoAdd'

function Todo(props) {
    return (
        <ul>
            {props.todos.map((todo) => {
                return (
                    <li key={todo._id}>
                        {todo.text}
                        <button onClick={props.onDelete.bind(null, todo._id)}>
                            Delete
                        </button>
                    </li>)
            })}
        </ul>
    )
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: null
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.handleAddList = this.handleAddList.bind(this)
    }

    componentDidMount() {
        api.fetchTodo()
            .then((res) => {
                this.setState(() => {
                    return {
                        todos: res
                    }
                })
            })

    }

    handleDelete(todoId) {
        api.deleteTodo(todoId)
            .then((res) => {
                let remainTodos = this.state.todos.filter((todo) => {
                    return res._id !== todo._id
                })

                this.setState(() => {
                    return {
                        todos: remainTodos
                    }
                })
            })
    }

    handleAddList(listName) {
        api.createTodo(listName)
            .then((res) => {
                let addTodo = [...this.state.todos, res]
                this.setState(() => {
                    return {
                        todos: addTodo
                    }
                })
            })
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>CRUD React Todo List</h1>
                <h2>All List</h2>
                {!this.state.todos
                 ? <h1>Loading</h1>
                 : <Todo 
                        todos={this.state.todos}
                        onDelete={this.handleDelete} 
                    />}
                <h2>Add List</h2>
                <TodoAdd 
                    label='List name '
                    onAdd={this.handleAddList}
                    placeholder='Enter List Name'
                />
            </div>
        )
    }
}

export default App