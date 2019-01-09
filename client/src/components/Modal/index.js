import React from 'react'
import './style.css'

const Modal = ({ title, children }) => {
  return (
    <div className="modal fade show" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content" styleName='customModal'>
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal