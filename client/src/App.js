import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import routes from 'routes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getWeb3 from 'utils'
import * as envActions from 'actions/env'

class App extends Component {
  componentDidMount = () => {
    /*
    const { envActions } = this.props
    getWeb3()
      .then(result => {
        envActions.setEnv(result)
      })
    */
    //FIXME:
    //const Contract = truffleContract(SimpleStorageContract);
    //Contract.setProvider(web3.currentProvider);
    //const instance = await Contract.deployed();
  }

  render() {
    const { store, history, env } = this.props
    const { web3, account } = env
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {routes}
        </ConnectedRouter>
      </Provider>
    )
  }
}

function mapStateToProps(state) {
  return {
    env: state.env
  }
}

function mapDispatchToProps(dispatch) {
  return {
    envActions: bindActionCreators(envActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)