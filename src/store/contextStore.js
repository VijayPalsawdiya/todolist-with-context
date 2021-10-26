import React, { Component } from 'react';

const MyContext = React.createContext()

const createStore = WrappedComponent => {
  return class extends Component {
    state = {
      get: key => {
        return this.state[key]
      },
      set: (key, value) => {
        const state = this.state
        state[key] = value
        this.setState(state)
      },
      remove: key => {
        const state = this.state
        delete state[key]
        this.setState(state)
      }
    }
    render() {
      return (
        <MyContext.Provider value={this.state}>
          <WrappedComponent {...this.props} />
        </MyContext.Provider >

      )
    }
  }
}

const withStore = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <MyContext.Consumer>
          {context => <WrappedComponent store={context} {...this.props} />}
        </MyContext.Consumer>
      )
    }
  }
}

export { createStore, withStore }
