/**
 * Created by Steven on 1/11/18.
 */
import { request } from "../utils"

export const FETCH_DEBATES = "FETCH_DEBATES"
export const FETCH_DEBATES_SUCCESS = "FETCH_DEBATES_SUCCESS"
export const FETCH_DEBATES_ERROR400 = "FETCH_DEBATES_ERROR400"
export const FETCH_DEBATES_ERROR500 = "FETCH_DEBATES_ERROR500"
export const FETCH_DEBATES_FAILURE = "FETCH_DEBATES_FAILURE"
export function fetchDebates() {
  return function (dispatch) {
    let url = "http://127.0.0.1:8000/debate/api"
    dispatch({type: FETCH_DEBATES})
    return request(
      url, {},
      (json) => { dispatch({type: FETCH_DEBATES_SUCCESS, res: json}) },
      (json) => { dispatch({type: FETCH_DEBATES_ERROR400, res: json}) },
      (res) => { dispatch({type: FETCH_DEBATES_ERROR500, res: res}) },
      (ex) => { dispatch({type: FETCH_DEBATES_FAILURE, error: ex}) },
    )
  }
}