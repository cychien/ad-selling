import { createAction } from 'redux-actions'
import { CALL_API } from 'middleware/api'

export const unauthorized = createAction('UNAUTHORIZED')
export const switchTab = createAction('SWITCH_TAB')

export function register({ name, password }) {
  return {
    [CALL_API]: {
      types: [
        'REGISTER_REQUEST',
        'REGISTER_RECEIVE',
        'REGISTER_FAILURE'
      ],
      endpoint: `register`,
      method: 'POST',
      body: {
        name,
        password
      }
    }
  }
}

export function login({ name, password }) {
  return {
    [CALL_API]: {
      types: [
        'LOGIN_REQUEST',
        'LOGIN_RECEIVE',
        'LOGIN_FAILURE'
      ],
      endpoint: `login`,
      method: 'POST',
      body: {
        name,
        password
      }
    }
  }
}

export function connect({ name, address }) {
  return {
    [CALL_API]: {
      types: [
        'CONNECT_REQUEST',
        'CONNECT_RECEIVE',
        'CONNECT_FAILURE'
      ],
      endpoint: `connect`,
      method: 'POST',
      body: {
        name,
        address
      }
    }
  }
}