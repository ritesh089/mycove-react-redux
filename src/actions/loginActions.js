import {LOGIN_PAGE_SUBMIT_PROCESSING,LOGIN_PAGE_SUBMIT_SUCCESS,LOGIN_PAGE_SUBMIT_FAILED,LOGIN_PAGE_TOGGLE_MODEL} from '../actionTypes'
export function loginPageSubmitProcessing() {
  return { type: LOGIN_PAGE_SUBMIT_PROCESSING }
}
export function loginPageSubmitSuccess() {
  return { type: LOGIN_PAGE_SUBMIT_SUCCESS }
}
export function loginPageSubmitFailed(message,title,className,submitButton) {
  return { type: LOGIN_PAGE_SUBMIT_FAILED, message,title,className,submitButton }
}
export function loginPageToggleModel() {
  return { type: LOGIN_PAGE_TOGGLE_MODEL }
}
