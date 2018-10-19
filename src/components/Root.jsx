import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from './patterns/HigherOrderComponents/xbonus/Provider'
import Modal from './patterns/Context/example/Modal'
import { counter } from './utils/redux-counter'

const store = createStore(counter)

const Root = ({ children }) => (
    <Provider store={store}>
        <Router>
            <Modal>
                {children}
            </Modal>
        </Router>
    </Provider>
)

export default Root