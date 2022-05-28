import { Link } from 'react-router-dom';
const NotFound = () => {
	return (
		<div className='notFound-container'>
			<h1 className='notFound'>404 - Not Found!</h1>
			<Link className='notFoundLink' to='/'>
				Go Back
			</Link>
		</div>
	);
};

export default NotFound;
