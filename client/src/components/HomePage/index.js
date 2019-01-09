import React, { Component } from 'react'
import adSample2 from 'static/images/ad-sample2.jpg'
import SellingAd from 'components/SellingAd'
import AdDetailModal from 'components/AdDetailModal'
import cx from 'classnames'
import Loading from 'components/Loading'
import './style.css'

class HomePage extends Component {
  render() {
    const { isModalOpen, toggleModal, user, connect, isLoading, contracts, contractInModal, features, isEditing, editModal, adContent, yourBid, editModalData, bid } = this.props
    const { account } = user

    if (isLoading) return <Loading />

    return (
      <div styleName={cx({ 'page': !account })}>
        {
          !account && (
            <div className='alert alert-warning p-4 text-center' styleName='connectAlert'>
              <div className='mb-3'>您尚未連結至您的乙太坊帳戶</div>
              <div>
                <button type='button' className='btn btn-raised btn-warning' onClick={() => connect()}>
                  點我連結
                </button>
              </div>
            </div>
          )}
        <div className='px-5 py-5' styleName={cx({ 'disabled': !account })}>
          <div className='row no-gutters'>
            <div className="col-md-12">
              <div>
                <h3 className='text-secondary mb-5'>精選版位</h3>
                <div className='row'>
                  {
                    features.map((feature, i) => (
                      <div key={`feature-${i}`} className="col-md-3 mb-5">
                        <SellingAd
                          toggle={toggleModal}
                          contract={feature}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
              <h3 className='text-secondary mb-5'>所有版位</h3>
              <div className='row'>
                {
                  contracts.map((contract, i) => (
                    <div key={`all-${i}`} className="col-md-3 mb-5">
                      <SellingAd
                        toggle={toggleModal}
                        contract={contract}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <AdDetailModal
            isOpen={isModalOpen}
            toggle={toggleModal}
            contract={contractInModal}
            isEditing={isEditing}
            edit={editModal}
            adContent={adContent}
            yourBid={yourBid}
            editData={editModalData}
            bid={bid}
          />

        </div >
      </div >
    )
  }
}

export default HomePage