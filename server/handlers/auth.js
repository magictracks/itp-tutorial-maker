const db = require("../models");
const jwt = require("jsonwebtoken");

/**
@ Signin method
+ get the user from the db based on emai
+ use our .comparePassword() method def'd in our model
to check if we have a match
+ if so, then create jwt and send it to the client
+ if not, then return err
@ */
exports.signin = async function(req, res, next){
	
	try{

		// retrieve the user specified by email
		let user = await db.User.findOne({
			email: req.body.email
		})


		let {id, username, profileImageUrl} = user;

		// use the mongo method we created in the user model
		let isMatch = await user.comparePassword(req.body.password)

		if(isMatch === true){
			// if the passwords match
			// create a jwt to create user session
			let token = jwt.sign(
				{
					id,
					username,
					profileImageUrl
				}, process.env.SECRET_KEY)

			// return the creds WITH THE TOKEN
			return res.status(201).json({
				id, 
				username,
				profileImageUrl,
				token
			})
		} else{
			return next({
				status:400,
				message:"invalid email and/or password"
			})
		}


	}catch(err){
		return next({
			status:400,
			message:"invalid email and/or password"
		})
	}
}

/**
@ Signup method
@ */
exports.signup = async function(req, res, next){


	try{
		let user = await db.User.create(req.body);
		let {id, username, profileImageUrl} = user;

		let token = jwt.sign({
			id,
			username,
			profileImageUrl
		}, process.env.SECRET_KEY)

		return res.status(200).json({
			id,
			username,
			profileImageUrl,
			token
		})

	}catch(err){
		if(err.code === 11000){
			err.message = "Sorry, that username and/or email is taken"
		}

		return next({
			status:400,
			message: err.message
		})
	}	
}