import React, { Component } from 'react'
import propTypes from 'prop-types'
import { TextField, RaisedButton } from 'material-ui'

import styles from './TodoInput.scss'

class TodoInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let value = event.target.value

        this.setState(() => {
            return {
                text: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.onAdd(this.state.text)

        this.setState(() => {
            return {
                text: ''
            }
        })
    }

    render() {
        return (
            <form className={styles.todoInput} onSubmit={this.handleSubmit}>
                <TextField
                    style={{width: '70%', marginTop: '20px'}}
                    inputStyle={{autocomplete: 'none'}}
                    hintText="ex. Eat Lunch"
                    floatingLabelText={this.props.placeholder}
                    value={this.state.text}
                    floatingLabelFixed={true}
                    autoComplete="none"
                    onChange={this.handleChange}
                />
                <RaisedButton
                    style={{marginLeft: '20px'}}
                    label="Add List" 
                    primary={true} 
                    type="submit"
                    disabled={this.state.text === ''}
                />
            </form>
        )
    }
}

TodoInput.propTypes = {
    onAdd: propTypes.func.isRequired,
    placeholder: propTypes.string.isRequired
}

export default TodoInput