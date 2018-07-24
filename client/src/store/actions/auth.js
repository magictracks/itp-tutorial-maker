import {apiCall} from "../../services/api";
import {SET_CURRENT_USER } from "../actionTypes";
import {addError, removeError} from "./errors"

export function setCurrentUser(user){
	return{
		type: SET_CURRENT_USER,
		user
	}
}


export function authUser(type, userData){
	return dispatch => {
		return new Promise( (resolve, reject ) => {
			return apiCall("post", `/api/auth/${type}`, userData)
			.then( ({token, ...user}) => {
				localStorage.setItem("jwtToken", token)
				dispatch(setCurrentUser(user));
				dispatch(removeError());
				console.log("something went right in auth.js")
				resolve();
			}).catch( err => {
				console.log("something went wrong in auth.js", err)
				dispatch(addError(err.message));
				reject(err);
			})
		})
	}
}