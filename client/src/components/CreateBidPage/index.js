import React from 'react'
import _ from 'lodash'
import cx from 'classnames'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './style.css'

const CreateBidPage = ({name, url, imageUrl, year, month, date, adType, editContract, createContract, resetContract, isCreating, isFinish, address, copied, onCopy}) => {
  return (
    <div className='px-5 py-5'>
      {
        isFinish && (
          <div className='d-flex justify-content-center'>
            <div className="alert alert-success text-center w-75">
              <div>您的拍賣合約已創建完成</div>
              <div>
                地址：
                <span className='font-weight-bold'>{address}</span>
              </div>
              <CopyToClipboard onCopy={onCopy} text={`<iframe src='http://localhost:8700/iframe/${address}' style={{border: 'none'}} width='100%' height={120} />`}>
                <div className='oneLine'>
                  iframe：
                  <span className='font-weight-bold clickable' style={{textDecoration: 'underline'}}>{`<iframe src='http://localhost:8700/iframe/${address}' style={{border: 'none'}} width='100%' height={120} />`}</span>
                </div>
              </CopyToClipboard>
              {
                copied && <div className='text-success font-weight-bold'>Copied!</div>
              }
            </div>
          </div>
        )}
      <div className='d-flex justify-content-center'>
        <div className='card w-75' styleName='customCard'>
          <div className="card-body p-5">
            <div className="form-group mb-5">
              <label className={cx({'text-secondary': isFinish})}>案件名稱</label>
              {
                isFinish && (
                  <div styleName='text'>{name}</div>
                )}
              {
                !isFinish && (
                  <input
                    className="form-control" 
                    placeholder="ex. 政治大學網站首頁右側欄" 
                    value={name}
                    onChange={e => editContract({
                      name: e.target.value
                    })}
                  />
                )}
            </div>
            <div className="form-group mb-5">
              <label className={cx({'text-secondary': isFinish})}>網址</label>
              {
                isFinish && (
                  <div styleName='text'>
                    <a href={url} target='_blank'>{url}</a>
                  </div>
                )}
              {
                !isFinish && (
                  <input
                    className="form-control"
                    placeholder="ex. https://www.nccu.edu.tw/"
                    value={url}
                    onChange={e => editContract({
                      url: e.target.value
                    })}
                  />
                )}
            </div>
            <div className="form-group mb-5">
              <label className={cx({'text-secondary': isFinish})}>版位類型</label>
              {
                isFinish && (
                  <div styleName='text'>
                    {
                      adType === 'horizontal'
                        ? '橫幅'
                        : adType === 'side' 
                          ? '側邊欄'
                          : '跳出式'                    
                    }
                  </div>
                )}
              {
                !isFinish && (
                  <select
                    className="form-control"
                    value={adType}
                    onChange={e => editContract({
                      adType: e.target.value
                    })}
                  >
                    <option value='horizontal'>橫幅</option>
                    <option value='side'>側邊欄</option>
                    <option value='cover'>跳出式</option>
                  </select>
                )}
            </div>
            <div className="form-group mb-5">
              <label className={cx({'text-secondary': isFinish})}>競標截止日期</label>
              {
                isFinish && (
                  <div styleName='text'>{`${year} / ${month} / ${date}`}</div>
                )}
              {
                !isFinish && (
                  <form className="form-inline d-flex">
                    <div className="form-group mr-3" style={{ width: '30%' }}>
                      <label className="bmd-label-floating w-25 justify-content-start">年份</label>
                      <select
                        className="form-control w-75"
                        value={year}
                        onChange={e => editContract({
                          year: e.target.value
                        })}
                      >
                        {
                          _.times(5, (i) => <option key={`year-${i}`} value={2019 + i}>{2019 + i}</option>)
                        }
                      </select>
                    </div>
                    <div className="form-group mr-3" style={{ width: '30%' }}>
                      <label className="bmd-label-floating w-25 justify-content-start">月份</label>
                      <select
                        className="form-control w-75"
                        value={month}
                        onChange={e => editContract({
                          month: e.target.value
                        })}
                      >
                        {
                          _.times(12, (i) => <option key={`month-${i}`} value={i + 1}>{i + 1}</option>)
                        }
                      </select>
                    </div>
                    <div className="form-group mr-3" style={{ width: '30%' }}>
                      <label className="bmd-label-floating w-25 justify-content-start">日期</label>
                      <select
                        className="form-control w-75"
                        value={date}
                        onChange={e => editContract({
                          date: e.target.value
                        })}
                      >
                        {
                          _.times(31, (i) => <option key={`date-${i}`} value={i + 1}>{i + 1}</option>)
                        }
                      </select>
                    </div>
                  </form>
                )}
            </div>
            <div className="form-group mb-5">
              <label className={cx({'text-secondary': isFinish})}>範例圖片</label>
              {
                isFinish && (
                  <div styleName='text'>
                    <a href={imageUrl} target='_blank'>{imageUrl}</a>
                  </div>
                )}
              {
                !isFinish && (
                  <input
                    className="form-control"
                    placeholder="ex. https://i.screenshot.net/3o92rb1"
                    value={imageUrl}
                    onChange={e => editContract({
                      imageUrl: e.target.value
                    })}
                  />
                )}
            </div>
            <div className='text-center'>
              {
                isFinish && (
                  <button
                    type="button"
                    className="btn btn-raised btn-persred"
                    onClick={() => resetContract()}
                  >
                    建立新合約
                  </button>
                )}
              {
                !isFinish && (
                  <button
                    type="button"
                    className="btn btn-raised btn-persred"
                    onClick={() => createContract()}
                  >
                    {
                      isCreating && <span><i className='fas fa-circle-notch fa-spin mr-2' /></span>
                    }
                    建立
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreateBidPage  