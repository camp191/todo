import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { 
    AppBar, 
    FlatButton,
    Drawer,
    MenuItem,
    TextField
} from 'material-ui'
import Home from 'material-ui/svg-icons/action/home'
import List from 'material-ui/svg-icons/action/list'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openDrawer: false
        }

        this.handleDrawer = this.handleDrawer.bind(this)
    }

    handleDrawer() {
        this.setState(() => {
            return {
                openDrawer: !this.state.openDrawer
            }
        })
    }

    render() {
        return (
            <div>
                <AppBar
                    title="React Todo List"
                    onLeftIconButtonTouchTap={this.handleDrawer}
                    iconElementRight={
                        <div style={{marginTop: '5px' }}>
                            <FlatButton 
                                labelStyle={{color:'white'}}
                                containerElement={ <NavLink exact to="/" /> } 
                                label="Welcome" />
                            <FlatButton
                                labelStyle={{color:'white'}}
                                containerElement={ <NavLink to="/todo" /> } 
                                label="To-Do-List" />
                        </div>
                    }
                />
                <Drawer 
                    open={this.state.openDrawer}
                    docked={false}
                    onRequestChange={(openDrawer) => {
                        this.setState({openDrawer})
                    }
                }
                >
                    <AppBar
                        title="React Todo"
                        showMenuIconButton={false}
                    />
                    <TextField
                        style={{margin: '0px 20px', width: '220px'}}
                        hintText="Ex: Eat lunch"
                        floatingLabelText="Search"
                    />
                    <MenuItem 
                        leftIcon={ <Home /> }
                        containerElement={ <NavLink exact to="/" />} 
                        onTouchTap={this.handleDrawer}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        leftIcon={ <List/> }
                        containerElement={ <NavLink exact to="/todo" />} 
                        onTouchTap={this.handleDrawer}
                    >
                        List
                    </MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default Header