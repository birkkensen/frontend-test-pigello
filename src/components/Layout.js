import { Navbar, Footer, ScrollToTop } from '../components';
const Layout = ({ children }) => {
	return (
		<div className='page-wrapper'>
			<Navbar />
			<ScrollToTop />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
