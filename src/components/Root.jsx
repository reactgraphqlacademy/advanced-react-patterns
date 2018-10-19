import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import Modal from './patterns/Context/example/Modal'
import { counter } from './utils/redux-counter'

// Don't do window.__store ever!! this is only to avoid using a provider until the context exercise
window.__store = createStore(counter)

const Root = ({ children }) => (
    <Router>
        <Modal>
            {children}
        </Modal>
    </Router>
)

export default Root