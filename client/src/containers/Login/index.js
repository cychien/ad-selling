import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import * as userActions from 'actions/user'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css'

class Login extends Component {
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
    const { user, userActions } = this.props
    const { name, isLoading } = user

    if (name) return <Redirect to='/explore' />

    return (
      <div styleName='bg' onClick={this.notify}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div>
            <h3 className='mb-3 text-center'>PERSPICUUS</h3>
            <div className='card mb-3' styleName='form'>
              <div className='card-body'>
                <div className="form-group">
                  <label>帳號</label>
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
                userActions.login({ name: inputName, password: inputPW })
              }}>
                {
                  isLoading && <span><i className='fas fa-circle-notch fa-spin mr-2' /></span>
                }
                登入
              </button>
              <div><Link className='small' styleName='register' to='/register'>還沒帳號嗎，這邊註冊</Link></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)