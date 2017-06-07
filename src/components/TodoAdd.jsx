import React, { Component } from 'react'
import propTypes from 'prop-types'

class TodoAdd extends Component {
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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="text">{this.props.label}</label>
                <input 
                    type="text"
                    autoComplete='off'
                    placeholder={this.props.placeholder}
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button
                    type="submit"
                    disabled={this.state.text === ''}
                >
                    Add List
                </button>
            </form>
        )
    }
}

TodoAdd.propTypes = {
    label: propTypes.string.isRequired,
    onAdd: propTypes.func.isRequired,
    placeholder: propTypes.string.isRequired
}

export default TodoAdd