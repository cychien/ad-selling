import { createAction } from 'redux-actions'
import { CALL_API } from 'middleware/api'

export const editContracts = createAction('EDIT_CONTRACTS')
export const editContract = createAction('EDIT_CONTRACT')
export const startBidding = createAction('START_BIDDING')
export const endBidding = createAction('END_BIDDING')
export const editIframeValue = createAction('EDIT_IFRAME_VALUE')

export function createContract({ name, url, imageUrl, dueDate, poster, contractAddress, adType }) {
  return {
    [CALL_API]: {
      types: [
        'CREATE_CONTRACT_REQUEST',
        'CREATE_CONTRACT_RECEIVE',
        'CREATE_CONTRACT_FAILURE'
      ],
      endpoint: `case`,
      method: 'POST',
      body: {
        name,
        url,
        imageUrl,
        dueDate,
        poster,
        contractAddress,
        adType
      }
    }
  }
}

export function getContracts() {
  return {
    [CALL_API]: {
      types: [
        'GET_CONTRACTS_REQUEST',
        'GET_CONTRACTS_RECEIVE',
        'GET_CONTRACTS_FAILURE'
      ],
      endpoint: `cases`,
      method: 'GET'
    }
  }
}

export function getFeatures() {
  return {
    [CALL_API]: {
      types: [
        'GET_FEATURES_REQUEST',
        'GET_FEATURES_RECEIVE',
        'GET_FEATURES_FAILURE'
      ],
      endpoint: `cases?feature=feature`,
      method: 'GET'
    }
  }
}
