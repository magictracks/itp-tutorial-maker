import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from "../images/magic-tracks-logo.png"

class Navbar extends Component{
	render(){

		return(

			<nav>
				<div>
					<Link to="/">
						<img src={Logo} alt="Magic Tracks Home"/>
					</Link>
				</div>
				<ul>
					<li><Link to="/signup">Sign up</Link></li>
					<li>|</li>
					<li><Link to="/signin">Sign in</Link></li>
				</ul>

				<style jsx>{`

					*{
						box-sizing: border-box;
					}

					nav{
						width:100%;
						height: 64px;
						display: flex;
						flex-direction:row;
						justify-content: space-between;
						align-items:center;
						*border:2px solid white;
						padding:10px;
						margin-bottom:1rem;
						background: linear-gradient(to right, #FEEE27, #F97CB4, #33CFF8); 
					}

					nav img{
						height: 48px;
					}

					nav a{
						font-weight:bold;
						color:white;
						text-decoration:none;
					}
					nav a:hover{
						color: #FEEE27;
						text-decoration:underline;
					}


					nav ul{
						text-direction:none;
						margin:0;
						display: flex;
						flex-direction:row;
						list-style:none;
					}
					nav ul li{
						list-style:none;
						margin-right:10px;
					}

				`}
				</style>
			</nav>

		)
	}
}


function mapStateToProps(state){
	return{
		currentUser:state.currentUser
	}
}

export default connect(mapStateToProps, null)(Navbar)