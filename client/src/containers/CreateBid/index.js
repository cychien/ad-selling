import React, { Component } from 'react'
import Menu from 'containers/Menu'
import CreateBidPage from 'components/CreateBidPage'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AdSellerContract from "contracts/AdSeller";
import getWeb3 from 'utils';
import * as contractActions from 'actions/contract'

class CreateBid extends Component {
  state = {
    name: '',
    url: '',
    imageUrl: '',
    year: 2019,
    month: 1,
    date: 1,
    adType: 'horizontal',
    isFinish: false,
    copied: false
  }

  editContract = (content) => {
    this.setState({
      ...content
    })
  }

  createContract = () => {
    const { name, url, imageUrl, year, month, date, adType } = this.state
    const { env, user, contractActions } = this.props
    const { name: username, account } = user
    //FIXME
    //const dueDate = 1546973968956
    const dueDate = new Date(year, month - 1, date).getTime()
    getWeb3()
      .then(web3 => {
        return new web3.eth.Contract(AdSellerContract.abi)
      })
      .then(contract => {
        return contract
          .deploy({
            data: AdSellerContract.bytecode,
            arguments: [dueDate]
          })
          .send({
            from: account,
            gas: 3400000
          })
          .then(result => {
            contractActions.createContract({
              name,
              url,
              imageUrl,
              dueDate,
              poster: username,
              contractAddress: result.options.address,
              adType
            })
              .then(() => {
                this.setState({
                  isFinish: true
                })
              })
          })
      })
  }

  resetContract = () => {
    this.setState({
      name: '',
      url: '',
      imageUrl: '',
      year: 2019,
      month: 1,
      date: 1,
      adType: 'horizontal',
      isFinish: false
    })
  }

  onCopy = () => {
    this.setState({copied: true});
  }

  render() {
    const { name, url, imageUrl, year, month, date, adType, isFinish, copied } = this.state
    const { contract } = this.props
    const { isCreating, address } = contract
    console.log({name, url, imageUrl, year, month, date, adType});
    return (
      <div className='row no-gutters'>
        <div className="col-md-2">
          <Menu />
        </div>
        <div className="col-md-10">
          <CreateBidPage 
            name={name}
            url={url}
            imageUrl={imageUrl}
            year={year}
            month={month}
            date={date}
            adType={adType}
            editContract={this.editContract}
            createContract={this.createContract}
            resetContract={this.resetContract}
            isCreating={isCreating}
            isFinish={isFinish}
            address={address}
            copied={copied}
            onCopy={this.onCopy}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    env: state.env,
    user: state.user,
    contract: state.contract
  }
}

function mapDispatchToProps(dispatch) {
  return {
    contractActions: bindActionCreators(contractActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBid)