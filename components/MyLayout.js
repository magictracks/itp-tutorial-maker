import Header from './Header'

const Layout = (props) => (

	<div id="App">
		
		<Header />
		<main>
			<div className="container">
				{props.children}
			</div>
		</main>

		<style jsx>{`
			*{
				box-sizing: border-box;
				font-family: Helvetica, sans serif;
			}

			main{
				width: 100%;
				height:100%;
				display:flex;
				flex-direction:column;
				align-items:center;
			}

			.container{
				width:100%;
				height:100%;
				display:flex;
				flex-direction:column;
				max-width:960px;
				min-width:560px;
				{/*border:1px solid black;*/}
			}


		`}</style>
	</div>
)

export default Layout