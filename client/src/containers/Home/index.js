import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Menu from 'containers/Menu'
import getWeb3 from 'utils'
import AdSellerContract from "contracts/AdSeller";
import { ToastContainer, toast } from 'react-toastify'
import './style.css'

import * as envActions from 'actions/env'
import * as userActions from 'actions/user'
import * as contractActions from 'actions/contract'

import Loading from 'components/Loading'
import HomePage from 'components/HomePage'

import { DEFAULT_PORT } from 'config'

class Home extends Component {
  state = {
    isModalOpen: false,
    contractInModal: '',
    isEditing: false,
    adContent: '',
    yourBid: ''
  }

  componentWillMount() {
    const {contractActions, user} = this.props
    const { account, name } = user
    let web3 = ''
    contractActions.getFeatures()
      .then(() => {
        const { contract } = this.props
        const { features } = contract
        getWeb3()
          .then(result => {
            web3 = result
            return new web3.eth.Contract(AdSellerContract.abi)
          })
          .then(_contract => {
            features.map((item, i) => {
              _contract.options.address = item.contractAddress
              const bidValuePromise = _contract.methods.bidValue().call({ from: account })
                .then(result => {
                  return result
                })
              const winnerPromise = _contract.methods.winner().call({ from: account })
                .then(result => {
                  return result
                })
              Promise.all([bidValuePromise, winnerPromise])
                .then(result => {
                  const bidValue = web3.utils.fromWei(result[0], 'ether')
                  const winner = result[1]
                  contractActions.editContracts({index: i, bidValue, winner, userAccount: account, type: 'feature'})                  
                })
            })
          })
      })
    contractActions.getContracts()
      .then(() => {
        const { contract } = this.props
        const { contracts } = contract
        let web3 = ''
        getWeb3()
          .then(result => {
            web3 = result
            return new web3.eth.Contract(AdSellerContract.abi)
          })
          .then(_contract => {
            contracts.map((item, i) => {
              _contract.options.address = item.contractAddress
              const bidValuePromise = _contract.methods.bidValue().call({ from: account })
                .then(result => {
                  return result
                })
              const winnerPromise = _contract.methods.winner().call({ from: account })
                .then(result => {
                  return result
                })
              Promise.all([bidValuePromise, winnerPromise])
                .then(result => {
                  const bidValue = web3.utils.fromWei(result[0], 'ether')
                  const winner = result[1]
                  contractActions.editContracts({index: i, bidValue, winner, userAccount: account, username: name})
                })
            })
          })
      })
  }

  componentWillReceiveProps (nextProps) {
    if ((!nextProps.contract.isBidding && this.props.contract.isBidding)) {
      toast.success('🚀 投標成功', {
        position: "top-right",
        autoClose: 3000
      })
    }
  }

  connect = () => {
    const { user, userActions } = this.props
    const { name } = user
    getWeb3()
      .then(result => {
        return result.eth.getAccounts()
      })
      .then(result => {
        userActions.connect({ name, address: result[0] })
      })
  }

  toggleModal = (contract) => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      contractInModal: contract,
      isEditing: false,
      adContent: '',
      yourBid: ''
    })
  }

  editModal = () => {
    this.setState({
      isEditing: true
    })
  }

  editModalData = (data) => {
    this.setState({
      ...data
    })
  }

  bid = ({adContent, yourBid, contractAddress}) => {
    const { user, contractActions } = this.props
    const { name, account } = user
    let web3 = ''
    getWeb3()
      .then(result => {
        web3 = result
        return new web3.eth.Contract(AdSellerContract.abi)
      })
      .then(_contract => {
          contractActions.startBidding()
          let bidValue = ''
          let winner = ''
          _contract.options.address = contractAddress
          _contract.methods.bid(adContent)
            .send({
              from: account,
              gas: 3400000,
              value: web3.utils.toWei(yourBid, "ether")
            })
            .then(result => {
              return _contract.methods.bidValue().call({ from: account })
            })
            .then(result => {
              bidValue = web3.utils.fromWei(result, 'ether')
              return _contract.methods.winner().call({ from: account })
            })
            .then(result => {
              winner = result
              contractActions.editContract({address: contractAddress, bidValue, winner, userAccount: account})
              this.toggleModal([])
              contractActions.endBidding()
            })
      })
  }

  render() {
    const { isModalOpen, contractInModal, isEditing, adContent, yourBid } = this.state
    const { user, env, contract } = this.props
    const { isLoading, contracts, features } = contract

    return (
      <div className='row no-gutters'>
        <div className="col-md-2">
          <Menu />
        </div>
        <div className="col-md-10">
          <ToastContainer />
          <HomePage
            features={features}
            contracts={contracts}
            getWeb3={getWeb3}
            isModalOpen={isModalOpen}
            toggleModal={this.toggleModal}
            user={user}
            env={env}
            userActions={userActions}
            envActions={envActions}
            connect={this.connect}
            isLoading={isLoading}
            contractInModal={contractInModal}
            isEditing={isEditing}
            editModal={this.editModal}
            adContent={adContent}
            yourBid={yourBid}
            editModalData={this.editModalData}
            bid={this.bid}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    env: state.env,
    contract: state.contract
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    envActions: bindActionCreators(envActions, dispatch),
    contractActions: bindActionCreators(contractActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
