import React, { Component } from 'react'
import style from './Welcome.scss'

class Welcome extends Component {
    state = {  }
    render() {
        return (
            <div>
                <h1 className={style.welcome}>Welcome to React ToDoList</h1>
            </div>
        )
    }
}

export default Welcome