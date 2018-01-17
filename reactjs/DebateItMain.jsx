import React from "react"
import { render } from "react-dom"
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers'
var Login = require('./components/login')
var auth = require('./components/auth')
var Router = require('react-router')
var App = require('./components/app')


import TestContainer from "./containers/TestContainer"

const store = createStore(allReducers)

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname:'/app/login/',
            state: {nextPathname: '/app/'}
        })
    }
}
class DebateItMain extends React.Component {



  render() {
    return (


            <Router.Router history={Router.browserHistory}>
                <Router.Route path='/app/login/' component={Login} />
                <Router.Route path='/app/' component={App} onEnter={requireAuth} />
            </Router.Router>

    )
  }
}

render(<DebateItMain/>, document.getElementById('DebateItMain'))