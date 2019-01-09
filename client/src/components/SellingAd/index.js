import React from 'react'
import Countdown from 'react-countdown-now'
import './style.css'

const SellingAd = ({ contract, toggle }) => {
  const {name, url, imageUrl, bidValue, dueDate} = contract
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (!days && !hours && !minutes && !seconds) return null
    return <span>
      {`${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`}
    </span>
  }

  return (
    <div className='card clickable' onClick={() => toggle(contract)}>
      <img className='card-img-top' src={imageUrl} />
      <div className='card-body'>
        <div className='card-text oneLine'>名稱：{name}</div>
        <div className='card-text' styleName='url'>網址：<a href={url} target='_blank'>{url}</a></div>

          <div className='card-text mb-3'>
            <span>剩餘：</span> 
            <Countdown
              date={dueDate}
              renderer={renderer}
            />
          </div>

        <div className='card-text'>
          {
            bidValue == 0
              ? <div className='text-warning'>尚未有人出價</div>
              : <div><span className='text-warning'><i className="fab fa-ethereum mr-2" /> {bidValue} ETH</span></div>
          }
        </div>
      </div>
    </div>
  )
}

export default SellingAd