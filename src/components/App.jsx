import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui'
import Header from './Header'
import TodoFeature from './Todo/TodoFeature'
import Welcome from './Welcome'

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                            <Route path="/todo" component={TodoFeature} />
                            <Route render={() => {
                                return <h1>Page Not Found</h1>
                            }} />
                        </Switch>
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}

export default App