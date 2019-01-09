import React from 'react'
import { Link } from 'react-router-dom'
import avatar from 'static/images/avatar.png';
import './style.css'

const Header = ({ text }) => (
  <div className='d-flex justify-content-end p-3 border-bottom'>
    <div>
      <img src={avatar} alt="Avatar" className='rounded-circle img-responsive' styleName='avatar' />
    </div>
  </div>
)

export default Header
