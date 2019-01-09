import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import * as userActions from 'actions/user'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

class Register extends Component {
  state = {
    inputName: '',
    inputPW: ''
  }

  editName = (name) => {
    this.setState({
      inputName: name
    })
  }

  editPW = (pw) => {
    this.setState({
      inputPW: pw
    })
  }

  render() {
    const { inputName, inputPW } = this.state
    const { history, user, userActions } = this.props
    const { name, isLoading } = user

    if (name) return <Redirect to='/explore' />

    return (
      <div styleName='bg'>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div>
            <h3 className='mb-3 text-center'>加入PERSPICUUS</h3>
            <div className='card mb-3' styleName='form'>
              <div className='card-body'>
                <div className="form-group">
                  <label>名稱</label>
                  <input className="form-control" value={inputName} onChange={e => this.editName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>密碼</label>
                  <input type='password' className="form-control" value={inputPW} onChange={e => this.editPW(e.target.value)} />
                </div>
              </div>
            </div>
            <div className='text-center'>
              <button className="btn btn-raised btn-persred mb-3" onClick={() => {
                userActions.register({ name: inputName, password: inputPW })
              }}>
                {
                  isLoading && <span><i className='fas fa-circle-notch fa-spin mr-2' /></span>
                }
                註冊
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register))