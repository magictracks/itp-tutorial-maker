import Nav from '../components/Nav'

const Header = () => (
	<header>
		<Nav/>

		<style jsx>{`
			header{
				width: 100%;
				height:60px;
				display:flex;
				flex-direction:column;
				align-items:center;
			}
			`}</style>
	</header>
)

export default Header