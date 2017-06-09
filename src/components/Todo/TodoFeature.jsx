import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from './../../utils/api.js'
import { Paper, AppBar, CircularProgress } from 'material-ui'

import List from './List'
import TodoInput from './TodoInput'

import styles from './TodoFeature.scss'

function Todo(props) {
    return (
        <ul>
            {
            (props.todos.length === 0) 
            ? <p className={styles.listdone}>All of lists is done</p> 
            : props.todos.map((todo) => {
                return (
                    <li className={styles.list} key={todo._id}>
                        <List
                            onUpdate={props.onUpdate}
                            onDelete={props.onDelete}
                            todo={todo}
                        />
                    </li>)
            })
            }
        </ul>
    )
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

class TodoFeature extends Component {
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

    handleDone(todoId, done) {
        api.updateTodo(todoId, done)
    }

    render() {
        return (
            <div className={styles.todofeature}>
                <Paper className={styles.paper} zDepth={1} >
                    <AppBar
                        style={{backgroundColor: '#EEEEEE'}}
                        titleStyle={{color: '#9E9E9E'}}
                        title="TodoList"
                        showMenuIconButton={false}
                        zDepth={0}
                    />
                    <TodoInput 
                        onAdd={this.handleAddList}
                        placeholder='Add List'
                    />
                    <h2>All Lists</h2>
                    {!this.state.todos
                        ? <CircularProgress 
                            style={{display:'block', margin: '0 auto', marginTop: '60px'}}
                          />
                        : <Todo 
                            todos={this.state.todos}
                            onDelete={this.handleDelete}
                            onUpdate={this.handleDone}
                        />}
                </Paper>
            </div>
        )
    }
}

export default TodoFeature