const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	email:{
		type: String,
		required: true,
		unique: true
	},
	username:{
		type: String,
		required: true,
		unique: true
	},
	password:{
		type: String,
		required: true,
		unique: false
	},
	profileImageUrl:{
		type: String,
		required: false,
		unique: false
	},
	tutorials:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Tutorial"
	}],
	sections:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Section"
	}],
	resources:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Resource"
	}]
});


/**
@ user hook middleware
BEFORE we save the document, we are going to run an 
async functoin that is going to wait until the password
is hashed. Once it is hashed, go on to the next
piece of middleware which is going to save that
specific document.
@*/


userSchema.pre("save", async function(next){
	let hashedPassword;

	try{
		// if the password was not tampered with, go to next step
		if(!this.isModified("password")){
			return next();
		}
		// bcrypt.hash is async and will return a hashed password
		hashedPassword = await bcrypt.hash(this.password, 10);
		this.password = hashedPassword;
		
		// if all is well, allow for the next operation
		return next();

	} catch (err){
		return next(err);
	}
})

/**
@ Password comparison
A methods to allow each user model to compare passwords
against our DB. Ensures users have entered the right
password.
+ we add a method to the userSchema itself so we 
can access the method elsewhere in our application.
@*/
userSchema.methods.comparePassword = async function(candidatePassword, next){
	try{
		// check if the pass given matches the given user
		let isMatch = await bcrypt.compare(candidatePassword, this.password)
		// returns true/false boolean - add conditional
		// to your route to continue if true/fail if false.
		return isMatch;
	} catch(err){
		return next(err);
	}
};

const User = mongoose.model("User", userSchema);

module.exports = User;
















