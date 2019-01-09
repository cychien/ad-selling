import { handleActions } from 'redux-actions'
import _ from 'lodash'

export const initState = {
  contracts: [],
  isLoading: false,
  address: '',
  isCreating: false,
  selling: [],
  tracking: [],
  leading: [],
  win: [],
  features: [],
  isBidding: false,
  iframeBidValue: '',
  iframeWinner: '',
  iframeAdContent: '',
  iframeTime: ''
}

export default handleActions({
  CREATE_CONTRACT_REQUEST (state, action) {
    return {
      ...state,
      address: '',
      isCreating: true
    }
  },
  CREATE_CONTRACT_RECEIVE (state, action) {
    const { contractAddress } = action.payload
    return {
      ...state,
      address: contractAddress,
      isCreating: false
    }
  },
  CREATE_CONTRACT_FAILURE (state, action) {
    return {
      ...state,
      isCreating: false 
    }
  },
  GET_CONTRACTS_REQUEST (state, action) {
    return {
      ...state,
      contracts: [],
      isLoading: true,
      selling: [],
      tracking: [],
      leading: [],
      win: []
    }
  },
  GET_CONTRACTS_RECEIVE (state, action) {
    const { data } = action.payload
    return {
      ...state,
      contracts: data,
      isLoading: false
    }
  },
  GET_CONTRACTS_FAILURE (state, action) {
    return {
      ...state,
      isLoading: false
    }    
  },
  EDIT_CONTRACTS (state, action) {
    const { index, bidValue, winner, userAccount, username, type } = action.payload
    if (type === 'feature') {
      const newContracts = _.cloneDeep(state.features)
      newContracts[index].bidValue = bidValue
      newContracts[index].winner = winner
      return {
        ...state,
        features: newContracts,
      }
    } else {
      const newContracts = _.cloneDeep(state.contracts)
      newContracts[index].bidValue = bidValue
      newContracts[index].winner = winner
      return {
        ...state,
        contracts: newContracts,
        selling: (newContracts[index].poster === username && newContracts[index].dueDate > new Date().getTime()) ? [...state.selling, newContracts[index]] : [...state.selling],
        tracking: [],
        leading: (newContracts[index].winner === userAccount && newContracts[index].dueDate > new Date().getTime()) ? [...state.leading, newContracts[index]] : [...state.leading],
        win: (newContracts[index].winner === userAccount && newContracts[index].dueDate < new Date().getTime()) ? [...state.win, newContracts[index]] : [...state.win]
      }
    }
  },
  GET_FEATURES_REQUEST (state, action) {
    return {
      ...state,
      features: []
    } 
  },
  GET_FEATURES_RECEIVE (state, action) {
    const { data } = action.payload
    return {
      ...state,
      features: data
    }
  },
  GET_FEATURES_FAILURE (state, action) {
    return {
      ...state
    }
  },
  EDIT_CONTRACT (state, action) {
    const { address, bidValue, winner, userAccount } = action.payload
    const newContracts = _.cloneDeep(state.contracts)
    const index = _.findIndex(state.contracts, {contractAddress: address})
    newContracts[index].bidValue = bidValue
    newContracts[index].winner = winner
    //features
    const newFeatures = _.cloneDeep(state.features)
    const featuresIndex = _.findIndex(state.features, {contractAddress: address})
    if (featuresIndex !== -1) {
      newFeatures[featuresIndex].bidValue = bidValue
      newFeatures[featuresIndex].winner = winner
    }
    //leading
    const newLeading = _.cloneDeep(state.leading)
    if (newContracts[index].winner === userAccount && newContracts[index].dueDate > new Date().getTime()) {
      const leadingIndex = _.findIndex(state.leading, {contractAddress: address})
      if (leadingIndex === -1) newLeading.push(newContracts[index])
      else {
        newLeading[leadingIndex].bidValue = bidValue
        newLeading[leadingIndex].winner = winner
      }
    }
    //win
    const newWin = _.cloneDeep(state.win)
    if (newContracts[index].winner === userAccount && newContracts[index].dueDate < new Date().getTime()) {
      const winIndex = _.findIndex(state.win, {contractAddress: address})
      if (winIndex === -1) newWin.push(newContracts[index])
      else {
        newWin[winIndex].bidValue = bidValue
        newWin[winIndex].winner = winner
      } 
    }
    return {
      ...state,
      contracts: newContracts,
      features: newFeatures,
      tracking: [],
      leading: newLeading,
      win: newWin
    }
  },
  START_BIDDING (state, action) {
    return {
      ...state,
      isBidding: true
    }
  },
  END_BIDDING (state, action) {
    return {
      ...state,
      isBidding: false
    }
  },
  EDIT_IFRAME_VALUE (state, action) {
    const {bidValue, winner, adContent, bidDueTime} = action.payload
    return {
      ...state,
      iframeBidValue: bidValue,
      iframeWinner: winner,
      iframeAdContent: adContent,
      iframeTime: bidDueTime
    }
  }
}, initState)
