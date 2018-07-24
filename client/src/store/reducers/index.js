import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";

// we've bundled our reducers for error and current user
const rootReducer = combineReducers({
	currentUser,
	errors
})

export default rootReducer;