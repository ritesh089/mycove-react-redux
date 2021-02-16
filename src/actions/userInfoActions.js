import {SET_USER_INFO} from '../actionTypes'

export function setUserInfo(userName,userSessionID,userAvatarUrl,userRole) {
  return { type: SET_USER_INFO,userName,userSessionID,userAvatarUrl,userRole }
}
