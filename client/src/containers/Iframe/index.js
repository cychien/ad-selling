import React, { Component } from 'react'
import IframePage from 'components/IframePage'
import AdSellerContract from "contracts/AdSeller";
import getWeb3 from 'utils'
import * as userActions from 'actions/user'
import * as contractActions from 'actions/contract'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Iframe extends Component {
  state = {
    isDefault: true,
    isChoose: false,
    isLogin: false,
    isEdit: false,
    username: '',
    password: '',
    adContent: '',
    bidValue: '',
    isEndBidding: false
  }

  backToDefault = () => {
    this.setState({
      isDefault: true,
      isChoose: false,
      isLogin: false,
      isEdit: false
    })
  }

  clickChoose = () => {
    this.setState({
      isDefault: false,
      isChoose: true,
      isLogin: false,
      isEdit: false
    })
  }

  clickLogin = () => {
    this.setState({
      isDefault: false,
      isChoose: false,
      isLogin: true,
      isEdit: false
    })
  }

  clickEdit = () => {
    this.setState({
      isDefault: false,
      isChoose: false,
      isLogin: false,
      isEdit: true
    })
  }

  edit = (content) => {
    this.setState({
      ...content
    })
  }

  endBidding = () => {
    this.setState({
      isEndBidding: true
    })
  }

  bid = ({adContent, yourBid}) => {
    const { user, contractActions, match } = this.props
    const { name, account } = user
    const contractAddress = match.params.address
    let web3 = ''
    let userAccount = ''
    getWeb3()
      .then(result => {
        web3 = result
        return result.eth.getAccounts()
      })
      .then(result => {
        if (account) userAccount = account
        else userAccount = result[0]
        return new web3.eth.Contract(AdSellerContract.abi)
      })
      .then(_contract => {
        _contract.options.address = contractAddress
        _contract.methods.bid(adContent)
          .send({
            from: userAccount,
            gas: 3400000,
            value: web3.utils.toWei(yourBid, "ether")
          })
          .then(result => {
            this.endBidding()
            this.backToDefault()
        })
      })
  }

  
  componentWillMount () {
    const {match, contractActions, user} = this.props
    const contractAddress = match.params.address
    let web3 = ''
    let account = ''
    getWeb3()
      .then(result => {
        web3 = result
        return web3.eth.getAccounts()
      })
      .then(result => {
        account = result[0]   
        return new web3.eth.Contract(AdSellerContract.abi)
      })
      .then(_contract => {
        _contract.options.address = contractAddress
        const bidValuePromise = _contract.methods.bidValue().call({ from: account })
          .then(result => {
            return result
          })
        const winnerPromise = _contract.methods.winner().call({ from: account })
          .then(result => {
            return result
          })
        const adContentPromise = _contract.methods.adContent().call({ from: account })
          .then(result => {
            return result
          })
        const timePromise = _contract.methods.bidDueTime().call({ from: account })
          .then(result => {
            return result
          })
        Promise.all([bidValuePromise, winnerPromise, adContentPromise, timePromise])
          .then(result => {
            const bidValue = web3.utils.fromWei(result[0], 'ether')
            const winner = result[1]
            const adContent = result[2]
            const bidDueTime = result[3]
            contractActions.editIframeValue({
              bidValue,
              winner,
              adContent,
              bidDueTime
            })
          })
      })
  }
  
  componentWillReceiveProps (nextProps) {
    if ((nextProps.user.name && !this.props.user.name)) {
      this.clickEdit()
    }
  }

  render () {
    const { isDefault, isChoose, isLogin, isEdit, username, password, adContent, bidValue, isEndBidding } = this.state
    const { userActions, contract } = this.props

    return (
      <IframePage 
        isDefault={isDefault}
        isChoose={isChoose}
        isLogin={isLogin}
        isEdit={isEdit}
        clickChoose={this.clickChoose}
        clickLogin={this.clickLogin}
        clickEdit={this.clickEdit}
        username={username}
        password={password}
        adContent={adContent}
        bidValue={bidValue}
        edit={this.edit}
        login={userActions.login}
        bid={this.bid}
        contract={contract}
        isEndBidding={isEndBidding}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    contract: state.contract
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    contractActions: bindActionCreators(contractActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Iframe)