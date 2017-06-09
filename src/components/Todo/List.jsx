import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
    FlatButton,
    Card,
    CardActions,
    CardTitle 
} from 'material-ui'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            done: this.props.todo.completed
        }

        this.handleDone = this.handleDone.bind(this)
        this.multiClick = this.multiClick.bind(this)
    }

    handleDone() {
        this.setState(() => {
            return {
                done: !this.state.done
            }
        })
    }

    multiClick(e) {
        e.preventDefault()

        this.props.onUpdate.bind(null, this.props.todo._id, !this.state.done)()
        this.handleDone()
    }

    render() {
        return (
            <Card>
                <CardTitle 
                    title={this.props.todo.text}
                    subtitle={this.state.done ? 'Done' : 'Not Done'}
                    showExpandableButton={true}
                >
                </CardTitle>
                <CardActions>
                    <FlatButton
                        style={{marginRight: '15px'}}
                        label={this.state.done ? 'Undone' : 'Done'}
                        primary={true}
                        onTouchTap={(e) => this.multiClick(e)}
                    />
                    <FlatButton 
                        label="Delete" 
                        secondary={true} 
                        onTouchTap={this.props.onDelete.bind(null, this.props.todo._id)}
                    />
                </CardActions>
            </Card>
        )
    }
}

List.proptypes = {
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

export default List