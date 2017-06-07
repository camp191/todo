import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            done: false
        }

        this.handleDone = this.handleDone.bind(this)
        this.multiClick = this.multiClick.bind(this)
    }

    handleDone() {
        this.setState(() => {
            return {
                done: true
            }
        })
    }

    multiClick(e) {
        e.preventDefault()

        this.props.onUpdate.bind(null, this.props.todo._id)()
        this.handleDone()
    }

    render() {
        return (
            <div>
                <span style={this.props.todo.completed || this.state.done ? {color: 'red'} : {color: 'blue'}}>
                    {this.props.todo.text}
                </span>
                <button onClick={this.props.onDelete.bind(null, this.props.todo._id)}>
                    Delete
                </button>
                <button onClick={(e) => this.multiClick(e)}>
                    Done
                </button>
            </div>
        )
    }
}

List.proptypes = {
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

export default List