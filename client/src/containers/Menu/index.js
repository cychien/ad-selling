import React, { Component } from 'react'
import avatar from 'static/images/avatar.png';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cx from 'classnames'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/user'
import './style.css';

class Menu extends Component {
  render() {
    const { router, user, contract, userActions } = this.props
    const pathname = router.location.pathname
    const { name, account } = user
    const {selling, tracking, leading, win} = contract

    return (
      <div className='p-4' styleName='sidebar' >
        <h1 className='text-center' styleName='logo'>
          PERSPICUUS
        </h1>
        <div className='text-center mb-3'>
          <div className='mb-2'>
            <img src={avatar} alt="Avatar" className='rounded-circle img-responsive p-2 border border-persred' />
          </div>
          <div className='font-weight-bold mb-2'>{name}</div>
          <div className='small text-secondary'>Taipei, Taiwan</div>
        </div>
        <div className='px-3' styleName='stats'>
          <div className='d-flex justify-content-between mb-3' styleName='dataRow'>
            <div className='text-center'>
              <div className='smallFont font-weight-bold mb-2'>銷售中</div>
              <div className='small text-secondary' onClick={() => userActions.switchTab('selling')}>
                <Link to='/profile'>{selling.length}</Link>
              </div>
            </div>
            <div className='text-center'>
              <div className='smallFont font-weight-bold mb-2'>追蹤中</div>
              <div className='small text-secondary' onClick={() => userActions.switchTab('tracking')}>
                <Link to='/profile'>{tracking.length}</Link>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-between mb-3' styleName='dataRow'>
            <div className='text-center'>
              <div className='smallFont font-weight-bold mb-2'>領先中</div>
              <div className='small text-secondary' onClick={() => userActions.switchTab('leading')}>
                <Link to='/profile'>{leading.length}</Link>
              </div>
            </div>
            <div className='text-center'>
              <div className='smallFont font-weight-bold mb-2'>已得標</div>
              <div className='small text-secondary' onClick={() => userActions.switchTab('win')}>
                <Link to='/profile'>{win.length}</Link>
              </div>
            </div>
          </div>
        </div>
        <hr styleName='divider' />
        <div className='px-3'>
          <Link to='/explore' styleName={cx({ 'disabled': !account })}>
            <div className={cx('clickable py-3', { 'text-persred': pathname === '/explore', 'text-secondary': pathname !== '/explore' })}>
              <span className='mr-3'><i className="far fa-compass" /></span>
              探索
            </div>
          </Link>
          <Link to='/create' styleName={cx({ 'disabled': !account })}>
            <div className={cx('clickable py-3', { 'text-persred': pathname === '/create', 'text-secondary': pathname !== '/create' })}>
              <span className='mr-3'><i className="fas fa-file-signature" /></span>
              建立拍賣
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    router: state.router,
    user: state.user,
    contract: state.contract
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)