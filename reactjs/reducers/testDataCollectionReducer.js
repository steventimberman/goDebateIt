/**
 * Created by Steven on 1/11/18.
 */
import * as testData from "../actions/testDataFetch"

const initialState = {
  isLoadingDebates: false,
  debates: undefined,
}

export default function data(state=initialState, action={}) {
  switch (action.type) {
  case testData.FETCH_DEBATES:
    return {...state, isLoadingDebates: true}
  case testData.FETCH_DEBATES_SUCCESS:
    return {...state, isLoadingDebates: false, debates: action.res}
  case testData.FETCH_DEBATES_ERROR400:
  case testData.FETCH_DEBATES_ERROR500:
  case testData.FETCH_DEBATES_FAILURE:
    return {...state, isLoadingDebates: false}
  default:
    return state
  }
}
