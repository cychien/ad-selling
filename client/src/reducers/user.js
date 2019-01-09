import { handleActions } from 'redux-actions'

export const initState = {
  name: '',
  account: '',
  users: {},
  isLoading: false,
  isConnecting: false,
  errors: [],
  tab: 'selling'
}

export default handleActions({
  REGISTER_REQUEST(state, action) {
    return {
      ...state,
      name: '',
      account: '',
      isLoading: true
    }
  },
  REGISTER_RECEIVE(state, action) {
    const { name } = action.payload
    return {
      ...state,
      name,
      isLoading: false
    }
  },
  REGISTER_FAILURE(state, action) {
    return {
      ...state,
      isLoading: false
    }
  },
  LOGIN_REQUEST(state, action) {
    return {
      ...state,
      name: '',
      account: '',
      isLoading: true
    }
  },
  LOGIN_RECEIVE(state, action) {
    const { name, address } = action.payload
    return {
      ...state,
      name,
      account: address,
      isLoading: false
    }
  },
  LOGIN_FAILURE(state, action) {
    return {
      ...state,
      isLoading: false
    }
  },
  CONNECT_REQUEST(state, action) {
    return {
      ...state,
      account: '',
      isConnecting: true
    }
  },
  CONNECT_RECEIVE(state, action) {
    const { address } = action.payload
    return {
      ...state,
      account: address,
      isConnecting: false
    }
  },
  CONNECT_FAILURE(state, action) {
    return {
      ...state,
      isConnecting: false
    }
  },
  GET_USERS_REQUEST(state, action) {
    return {
      users: {},
      isLoading: true,
      errors: []
    }
  },
  GET_USERS_RECEIVE(state, action) {
    return {
      ...state,
      users: action.payload,
      isLoading: false
    }
  },
  GET_USERS_FAILURE(state, action) {
    return {
      ...state,
      isLoading: false,
      errors: [...state.errors]
    }
  },
  SWITCH_TAB (state, action) {
    return {
      ...state,
      tab: action.payload
    }
  }
}, initState)
