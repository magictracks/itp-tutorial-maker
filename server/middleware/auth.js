require('dotenv').load()
const jwt = require("jsonwebtoken")

/**
@ MIDDLEWARE: loginRequired - goes between parts of the API
that need to check if a user is logged in. Used in conjunction
with making sure the right user is logged in - ensureCorrectUser.
+ if you're not logged in, you cannot use certain parts
of the API
@*/

exports.loginRequired = function(req, res, next){

	try{
		// Get the token from the request: "Authorization:Bearer <all the stuff>"
		let token = req.headers.authorization.split(" ")[1];
		// Decode the token using our secret key
		jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
			// if the decoded payload matches, then we are logged in
			// else, the return 401
			if(decoded){
				return next()

			} else{
				return next({
					status: 401,
					message: "Please log in first :)"
				})
			}
		})
	} catch(err){
		return next({
			status: 401,
			message: "Please log in first :)"
		})
	}
}


exports.ensureCorrectUser = function(req, res, next){

	try{
		// Get the token from the request: "Authorization:Bearer <all the stuff>"
		let token = req.headers.authorization.split(" ")[1];
		// Decode the token using our secret key
		jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
			if(decoded && decoded.id === req.params.id){
				return next();
			} else{
				return next({
					status:401,
					message: "unauthorized"
				})
			}
		})
	} catch(err){
		return next({
			status:401,
			message:"unauthorized"
		})
	}
}










