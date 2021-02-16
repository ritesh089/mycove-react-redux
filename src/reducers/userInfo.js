import {SET_USER_INFO} from '../actionTypes'

const initialState = { 
	userName: '',
    userSessionID:'',
    userAvatarUrl:'',
	userRole:''
};



const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
          userName: action.userName,
		  userSessionID:action.userSessionID,
          userAvatarUrl:action.userAvatarUrl,
		  userRole:action.userRole
      }
    default:
      return state
  }
}

export default userInfo