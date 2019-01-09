import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Countdown from 'react-countdown-now'
import moment from 'moment'
import { Transition, animated } from 'react-spring'
import './style.css'

const AdDetailModal = ({ contract, isOpen, toggle, isEditing, edit, adContent, yourBid, editData, bid, noAction }) => {
  if (contract.length === 0) return null

  const { name, url, imageUrl, dueDate, poster, contractAddress, adType, bidValue, winner } = contract
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (!days && !hours && !minutes && !seconds) return null
    return <div styleName='number'>
      {`${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`}
    </div>
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} size='lg'>
      <ModalHeader toggle={toggle}>
        <span className='text-secondary mr-4' styleName='title'><i className="far fa-newspaper"></i></span>
        <span className='font-weight-bold' styleName='title'>{name}</span>
      </ModalHeader>
      <ModalBody>
        <div className='px-5 position-relative'>
          <div className="mb-3">
            <div className='row mb-3'>
              <div className="col-md-3">發布者：</div>
              <div className="col-md-9">{poster}</div>
            </div>
            <div className='row mb-3'>
              <div className="col-md-3">版位類型：</div>
              <div className="col-md-9">
                {
                  adType === 'horizontal'
                    ? '橫幅'
                    : adType === 'side' 
                      ? '側邊欄'
                      : '跳出式'                    
                }
              </div>
            </div>
            <div className='row mb-3'>
              <div className="col-md-3">截止日期：</div>
              <div className="col-md-9">{moment(dueDate).format('YYYY / M / D')}</div>
            </div>
            <div className='row mb-3'>
              <div className="col-md-3">網址：</div>
              <div className="col-md-9">
                <a href='https://case.518.com.tw/help-helpser.html?cate=ad_cop' target='_blank'>https://case.518.com.tw/help-helpser.html?cate=ad_cop</a>
              </div>
            </div>
          </div>
          <div className='d-flex'>
            <div className="w-50 py-3 pl-0" styleName='data'>
              <div className='text-secondary smallFont'>目前金額</div>
              <div className='text-persred' styleName='number'>{bidValue} ETH</div>
            </div>
            <div className="w-50 p-3">
              <div className='text-secondary smallFont'>剩餘</div>
              <div>
                <Countdown
                  date={dueDate}
                  renderer={renderer}
                />
              </div>
            </div>
          </div>
          <div>
            <div className='mb-3'>圖示</div>
            <div className='d-flex justify-content-center'>
              <img className='mb-3' src={imageUrl} width='100%' height='100%' />
            </div>
          </div>
          {
            isEditing && (
              <Transition
                native
                items={isEditing}
                from={{height: 0}}
                enter={[{height: 300}]}
                leave={{height: 0}}
              >
                {
                  isEditing =>
                    isEditing && (props => (
                      <animated.div style={props} className='position-absolute p-4' styleName='form'>
                        <div className="form-group mb-5">
                          <label>廣告內容</label>
                          <textarea
                            className="form-control"
                            placeholder="ex. 這裡有好康的😋"
                            rows={3}
                            autoFocus
                            value={adContent}
                            onChange={e => editData({adContent: e.target.value})}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label>出價金額</label>
                          <input
                            className="form-control"
                            placeholder="ex. 0.55 (單位：ETH)"
                            value={yourBid}
                            onChange={e => editData({yourBid: e.target.value})}
                          />
                        </div>
                      </animated.div>
                  ))}
              </Transition>
            )}
        </div>
      </ModalBody>
      <ModalFooter>
        {
          !noAction && (
            <div className='px-5 py-3'>
              {
                isEditing && (
                  <button type='button' className='btn btn-raised btn-persred mr-3' onClick={() => bid({contractAddress, yourBid, adContent})}>
                    <span>確認送出</span>
                  </button>                
                )}
              {
                !isEditing && (
                  <button type='button' className='btn btn-raised btn-persred mr-3' onClick={() => edit()}>
                    <span>我要競標</span>
                  </button>                
                )}
              <button type='button' className='btn btn-raised btn-secondary' onClick={toggle}>取消</button>
            </div>
          )}  
        </ModalFooter>
    </Modal>
  )
}

export default AdDetailModal