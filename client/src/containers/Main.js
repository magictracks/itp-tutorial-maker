import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";

import {connect } from 'react-redux';

import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";

import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/errors"

const Main = props => {
	const {authUser, errors, removeError, currentUser} = props;
	return (
			<div className="container">
				<Switch>
					{/* Render me the homepage at this route with these props */}
					<Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props}/> }></Route>
					{/* Render me the signin at this route with these props plus more */}
					<Route exact path="/signin" render={props =>  {
						return(
								<AuthForm removeError={removeError} errors={errors} onAuth={authUser} {...props} buttonText="Hop On the Train!" heading="Choo Choo!" />
							)
					} }></Route>
				{/* Render me the signup at this route with these props plus more */}
					<Route exact path="/signup" render={props =>  {
						return(
								<AuthForm removeError={removeError} errors={errors} onAuth={authUser} {...props} buttonText="Sign Me Up!" heading="Join Today" signUp />
							)
					} }></Route>
				</Switch>
			</div>

		)
}

function mapStateToProps(state){
	return {
		currentUser: state.currentUser,
		errors: state.errors
	}
}

// REMEMBER TO BRING IN YOUR REDUX ACTIONS
export default withRouter( connect(mapStateToProps, {authUser, removeError})(Main) )




