import { useState, useEffect } from 'react';
import { fetchFromApi } from './api';

function App() {
	const [data, setData] = useState();
	useEffect(() => {
		fetchFromApi().then(setData);
	}, []);

	console.log(data);
	return (
		data && (
			<section className='container'>
				<div>
					<input className='search-field' placeholder='Search bodies' />
				</div>
				<div className='titles'>
					<h4>Name</h4>
					<h4>Around Planet</h4>
					<h4>Body Type</h4>
				</div>
			</section>
		)
	);
}

export default App;
