import React from 'react'
import cx from 'classnames'
import SellingAd from 'components/SellingAd'
import AdDetailModal from 'components/AdDetailModal'
import './style.css'

const ProfilePage = ({ user, contract, switchTab, isModalOpen, contractInModal, toggleModal }) => {
  const { tab } = user
  const { selling, tracking, leading, win } = contract
  return (
    <div className='p-5'>
      <div className="d-flex justify-content-start mb-5">
        <div className='mr-5'>
          <button
            type="button"
            className={cx("btn", {"btn-outline-persred": tab === 'selling'})}
            styleName={cx({"disabled": tab !== 'selling', "noAction": tab === 'selling'})}
            onClick={() => switchTab('selling')}
          >
            銷售中
          </button>          
        </div>
        <div className='mr-5'>
          <button
            type="button"
            className={cx("btn", {"btn-outline-persred": tab === 'tracking'})}
            styleName={cx({"disabled": tab !== 'tracking', "noAction": tab === 'tracking'})}
            onClick={() => switchTab('tracking')}
          >
            追蹤中
          </button>          
        </div>
        <div className='mr-5'>
          <button
            type="button"
            className={cx("btn", {"btn-outline-persred": tab === 'leading'})}
            styleName={cx({"disabled": tab !== 'leading', "noAction": tab === 'leading'})}
            onClick={() => switchTab('leading')}
          >
            領先中
          </button>          
        </div>
        <div className='mr-5'>
          <button
            type="button"
            className={cx("btn", {"btn-outline-persred": tab === 'win'})}
            styleName={cx({"disabled": tab !== 'win', "noAction": tab === 'win'})}
            onClick={() => switchTab('win')}
          >
            已得標
          </button>
        </div>
      </div>
      {
        tab === 'selling' && (
          <div className='row'>
            {
              selling.length > 0 && selling.map((item, i) => (
                <div key={`selling-${i}`} className="col-md-3 mb-5">
                  <SellingAd
                    toggle={toggleModal}
                    contract={item}
                  />
                </div>
              ))
            }
            {
              selling.length === 0 && <div className='col-md-12 text-secondary' style={{fontSize: '20px'}}>無資料</div>
            }
          </div>
        )}
      {
        tab === 'tracking' && (
          <div className='row'>
            {
              tracking.length > 0 && tracking.map((item, i) => (
                <div key={`tracking-${i}`} className="col-md-3 mb-5">
                  <SellingAd
                    toggle={toggleModal}
                    contract={item}
                  />
                </div>
              ))
            }
            {
              tracking.length === 0 && <div className='col-md-12 text-secondary' style={{fontSize: '20px'}}>無資料</div>
            }
          </div>
        )}
      {
        tab === 'leading' && (
          <div className='row'>
            {
              leading.length > 0 && leading.map((item, i) => (
                <div key={`leading-${i}`} className="col-md-3 mb-5">
                  <SellingAd
                    toggle={toggleModal}
                    contract={item}
                  />
                </div>
              ))
            }
            {
              leading.length === 0 && <div className='col-md-12 text-secondary' style={{fontSize: '20px'}}>無資料</div>
            }
          </div>
        )}
      {
        tab === 'win' && (
          <div className='row'>
            {
              win.length > 0 && win.map((item, i) => (
                <div key={`win-${i}`} className="col-md-3 mb-5">
                  <SellingAd
                    toggle={toggleModal}
                    contract={item}
                  />
                </div>
              ))
            }
            {
              win.length === 0 && <div className='col-md-12 text-secondary' style={{fontSize: '20px'}}>無資料</div>
            }
          </div>
        )}
      <AdDetailModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        contract={contractInModal}
        noAction
      />
    </div>
  )
}

export default ProfilePage