import { Navbar, Footer } from '../components';
const Layout = ({ children }) => {
	return (
		<div className='page-wrapper'>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
