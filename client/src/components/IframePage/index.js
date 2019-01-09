import React from 'react'
import Countdown from 'react-countdown-now'
import './style.css'

const IframePage = ({isDefault, isChoose, isLogin, isEdit, clickChoose, clickLogin, clickEdit, username, password, adContent, bidValue, edit, login, bid, contract, isEndBidding}) => {
  const {iframeBidValue, iframeWinner, iframeAdContent, iframeTime} = contract
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (!days && !hours && !minutes && !seconds) return null
    return <span>
      {`${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`}
    </span>
  }

  if (iframeTime < new Date().getTime()) {
    return (
      <div className='d-flex justify-content-center align-items-center' height='120'>
        {iframeAdContent}
      </div>
    )
  }

  return (
    <div className='px-3 py-1 position-relative' styleName='bg'>
      <div className='text-light'>
        此處廣告版位販售中
        {
          isEndBidding && (
            <span className='text-success ml-2'>(已成功投標)</span>
          )}
      </div>
      {
        isDefault && (
          <div className='mt-4'>
            <div className='d-flex justify-content-center'>
              <div className='text-danger position-relative'>
                <div className='small text-secondary position-absolute' styleName='rest'>剩餘時間</div>
                <div>
                  <span className='mr-3' styleName='countDown'>
                    <Countdown
                      date={Number(iframeTime)}
                      renderer={renderer}
                    />
                  </span>
                  <span className='small clickable' styleName='link' onClick={() => clickChoose()}>我要競標</span>
                </div>
              </div>
            </div>
          </div>
        )}
      {
        isChoose && (
          <div className='mt-1 text-center'>
            <div className='d-flex justify-content-center mb-2'>
              <button type="button" className="btn btn-raised btn-persred mr-3" onClick={() => clickLogin()} >
                以PERSPICUUS帳號競標
              </button>
              <button type="button" className="btn btn-raised btn-secondary" onClick={() => clickEdit()}>
                直接競標
              </button>
            </div>
            <div className='small text-light'>
              * 若以PERSPICUUS帳號競標，你可以在PERSPICUUS的網頁中查看並管理自己所有的交易紀錄
            </div>
          </div>
        )}
      {
        isLogin && (
          <div>
            <div className='d-flex justify-content-center mb-2'>
              <div className='d-flex justify-content-center w-50'>
                <div className="form-group mb-0 d-flex mr-3" style={{width: '40%'}}>
                  <div className='mr-3'><label className='col-form-label text-secondary' style={{color: 'white'}}>名稱</label></div>
                  <div>
                    <input
                      styleName='customInput'
                      value={username}
                      onChange={e => edit({username: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group mb-0 d-flex" style={{width: '40%'}}>
                  <div className='mr-3'><label className="col-form-label text-secondary" style={{color: 'white'}}>密碼</label></div>
                  <div>
                    <input
                      type='password'
                      styleName='customInput'
                      value={password}
                      onChange={e => edit({password: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group mb-0 text-right" style={{width: '10%'}}>
                  <button type="button" className="btn btn-raised btn-persred btn-sm" onClick={() => login({ name: username, password })}>
                    登入
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className='d-flex justify-content-center'>
                <a href='http://localhost:8700/register' target='_blank'>
                  <div className='small clickable' styleName='link'>
                  還沒帳戶嗎？點我註冊
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      {
        isEdit && (
          <div>
            <div className='d-flex justify-content-center mt-3'>
              <div className='d-flex justify-content-center' style={{width: '60%'}}>
                <div className="form-group mb-0 d-flex mr-3" style={{width: '40%'}}>
                  <div className='mr-3'><label className='col-form-label text-secondary' style={{color: 'white'}}>廣告內容</label></div>
                  <div>
                    <textarea
                      styleName='customInput'
                      rows='3'
                      placeholder="ex. 這裡有好康的😋"
                      value={adContent}
                      onChange={e => edit({adContent: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group mb-0 d-flex mr-3" style={{width: '40%'}}>
                  <div className='mr-3'><label className="col-form-label text-secondary" style={{color: 'white'}}>出價金額</label></div>
                  <div>
                    <input
                      styleName='customInput'
                      placeholder="ex. 0.55 (單位:ETH)"
                      value={bidValue}
                      onChange={e => edit({bidValue: e.target.value})}
                    />
                    <div className='small' style={{color: 'white'}}>現在價格：{iframeBidValue}</div>
                  </div>
                </div>
                <div className="form-group mb-0 text-right" style={{width: '10%'}}>
                  <button type="button" className="btn btn-raised btn-persred btn-sm" onClick={() => bid({adContent, yourBid: bidValue})}>
                    確定送出
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      <div className='position-absolute' styleName='tech'>
        <div className='text-light small'>PERSPICUUS 技術支援</div>
      </div>
    </div>
  )
}

export default IframePage