import React, {Component} from 'react';



class AuthForm extends Component {

	constructor(props){
		super(props);

		this.state ={
			email:"",
			password:"",
			username:"",
			profileImageUrl:""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	  this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
	  // alert('Tutorial created!: ' + JSON.stringify(this.state) );
	  event.preventDefault();

	  const authType = this.props.signUp ? "signup" : "signin";

	  this.props.onAuth(authType, this.state).then(() => {
	  	console.log("logged-in")
	  })
	}


	render(){
		const {email, username, password, profileImageUrl} = this.state;
		const {heading, buttonText, signUp, errors, history, removeError} = this.props;

		history.listen( () => {
			removeError();
		})
		return(
					<div className="form-container">
						<div className="auth-form">
							<form onSubmit={this.handleSubmit}>
								<h2>{heading}</h2>
								{errors.message && <div>{errors.message}</div>}
								<label htmlFor="email">email</label>
								<input type="text" name="email" id="email" onChange={this.handleChange} value={email} />
								<label htmlFor="password">password</label>
								<input type="password" name="password" id="password" onChange={this.handleChange} />

								{ signUp && (
								 		<div>
								 				<label htmlFor="username">Username</label>
								 				<input type="text" name="username" id="username" onChange={this.handleChange} value={username} />
								 				<label htmlFor="profileImageUrl">Profile Image URL (optional)</label>
								 				<input type="text" name="profileImageUrl" id="profileImageUrl" onChange={this.handleChange} value={profileImageUrl} />
								 		</div>
								 	)
								}

								<input type="submit" name="submit" id="submit" value={buttonText} />
							</form>
						</div>

						<style jsx>{`
							*{
								box-sizing:border-box;
							}

							.form-container{
								width:100%;
								height:100%;
								display:flex;
								flex-direction:column;
								align-items:center;

							}

							.auth-form{
								width:100%;
								height:100%;
								display:flex;
								flex-direction:column;
								max-width:400px;
								border: 2px solid black;
								text-align:center;
								padding:10px;
							}
							form{
								width:100%
							}
							form input{
								width:100%;
								margin-bottom:1rem;
							}
						`}</style>
					</div>

			)
	}

}

export default AuthForm