import { SET_CURRENT_USER } from "../actionTypes";

/**
@ Define the default state for users
@*/
const DEFAULT_STATE = {
	isAuthenticated: false, // will be tru when logged in
	user:{} // all the user info when logged in
}

/**
@ Check auth status
if the user is auth'd send user data
if not, send default state
@*/
function checkAuthenticationStatus(state = DEFAULT_STATE, action){
	switch(action.type){
		case SET_CURRENT_USER:
			// if the user returns any length for keys ==> true, if not, then false
			// the double !!, explained: 
			// transforms !0 ==> true // !!0 ==> false
			// transforms any number > 0  !2 ==> false // !!2 ==> true
			return {

				isAuthenticated: Object.keys(action.user).length > 0, // isAuthenticated: !!Object.keys(action.user).length,
				user: action.user
			}
		default:
			return state;
	}
}

export default checkAuthenticationStatus