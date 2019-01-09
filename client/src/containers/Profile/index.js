import React, { Component } from 'react'
import ProfilePage from 'components/ProfilePage'
import Menu from 'containers/Menu'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/user'
import * as contractActions from 'actions/contract'

class Profile extends Component {
  state = {
    isModalOpen: false,
    contractInModal: ''
  }

  toggleModal = (contract) => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      contractInModal: contract
    })
  }

  render () {
    const { isModalOpen, contractInModal } = this.state
    const { user, contract, userActions } = this.props
    return (
      <div className='row no-gutters'>
        <div className="col-md-2">
          <Menu />
        </div>
        <div className="col-md-10">
          <ProfilePage 
            user={user}
            contract={contract}
            switchTab={userActions.switchTab}
            isModalOpen={isModalOpen}
            contractInModal={contractInModal}
            toggleModal={this.toggleModal}
          />
        </div>
      </div>
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
)(Profile)
