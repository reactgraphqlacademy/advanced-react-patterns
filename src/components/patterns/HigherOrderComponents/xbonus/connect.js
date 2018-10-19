import React from 'react'
import PropTypes from 'prop-types'

/*
  Connect is a HoC (Higher-order Component) that:
  1. Subscribes to changes from the store. Meaning when the store's state changes we rerender the component calling this.forceUpdate()
  2. It get the state from the store by calling store.getState() and maps parts of the state in the child component using props
*/
export const connect = (mapStateToProps, mapDispatchToProps) => {
    return Component => {
        class ConnectedComponent extends React.Component {
            componentDidMount() {
                // We subscribe to the store just once, when the component is mounted. https://reactjs.org/docs/react-component.html#componentdidmount
                this.unsubscribe = this.context.store.subscribe(() => {
                    this.forceUpdate()
                })
            }

            componentWillUnmount() {
                // We unsubscribe from the store when the component is unmounted. https://reactjs.org/docs/react-component.html#componentwillunmount
                this.unsubscribe()
            }

            render() {
                const { store } = this.context
                const propsWithDataFromTheState = mapStateToProps && mapStateToProps(store.getState())
                const dispatch = mapDispatchToProps && mapDispatchToProps(store.dispatch)

                return (
                    <Component
                        {...this.props} // child component props
                        {...propsWithDataFromTheState} // adding new props with the state the component needs
                        {...dispatch} // injecting the store.dispatch method to the component
                    />
                )
            }
        }

        // You don't need to change anyting from here
        ConnectedComponent.contextTypes = {
            store: PropTypes.object
        }

        return ConnectedComponent
    }
}