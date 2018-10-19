import React from 'react'

// Don't do window.__store ever!! this is only to avoid using a provider until the context exercise
const store = window.__store

export const connect = () => {
    class ConnectedComponent extends React.Component {
        componentDidMount() {
            // We subscribe to the store just once, when the component is mounted. https://reactjs.org/docs/react-component.html#componentdidmount
            this.unsubscribe = store.subscribe(() => {
                this.forceUpdate()
            })
        }

        componentWillUnmount() {
            // We unsubscribe from the store when the component is unmounted. https://reactjs.org/docs/react-component.html#componentwillunmount
            this.unsubscribe()
        }

        render() {
            // TODO: implement the render method
            return null
        }
    }

    return ConnectedComponent
}