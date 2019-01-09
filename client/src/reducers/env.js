import { handleActions } from 'redux-actions'

export const initState = {
  web3: null,
  error: ''
}

export default handleActions({
  SET_ENV(state, action) {
    return {
      ...state,
      web3: action.payload
    }
  }
}, initState)
