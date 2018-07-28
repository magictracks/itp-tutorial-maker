import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = ({currentUser}) => {

	if(!currentUser.isAuthenticated){
		return (
					<div className="home-hero">
					<div className="home-hero-container">
						<h1>Take a ride on the Magic Tracks!</h1>
						<h2>New to Magic Tracks?</h2>
						<Link to="/signup" className="btn">
							<div>Sign Up!</div>
						</Link> <br/>
						<Link to="/signin">
							<div> or sign in to an existing account</div>
						</Link>

						</div>

						<style jsx>{`

							*{
								box-sizing:border-box;
							}

							.home-hero{
								width:100vw;
								height:100vh;
								position:absolute;
								top:0;
								left:0;
								margin:0;
								display:flex;
								flex-direction: column;
								align-items:center;
								justify-content:center;
								padding:10px;
							}

							.home-hero-container{
								width:100%;
								max-width:800px;
								border:2px solid black;
								padding:10px;
							}



							.home-hero h1{
								font-size: 56px;
								font-weight:bold;
							}
							.home-hero h2{
								font-size: 48px;
								font-weight:bold;
							}

							.home-hero .btn{
								width:100px;
								height: 60px;
								display:flex;
								flex-direction: column;
								justify-content:center;
								align-items:center;
								color: black;
								background-color:#F97CB4;
							}

						`}</style>
					</div>
			)
	}

	return(
			<div> you made it! </div>
		)
	
}

export default Homepage