
import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {createStore} from 'redux';
import allReducers from './reducers'
import App from './components/app'

const store = createStore(allReducers)

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname:'/app/login/',
            state: {nextPathname: '/app/'}
        })
    }
}

render(
    <Provider store={store}>
       <App/>
    </Provider>,
    document.getElementByid('root')
)