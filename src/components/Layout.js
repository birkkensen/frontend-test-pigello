import { Navbar } from '../components';
const Layout = ({ children }) => {
	return (
		<div className='page-wrapper'>
			<Navbar />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
