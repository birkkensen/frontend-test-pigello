import { useState, useEffect } from 'react';
import { fetchFromApi } from './api';
import { Bodies, Searchbar } from './components';

function App() {
	const [data, setData] = useState({
		bodies: [],
	});
	const [query, setQuery] = useState('');

	useEffect(() => {
		fetchFromApi(query).then(setData);
	}, [query]);
	return (
		<section className='container'>
			<Searchbar query={query} setQuery={setQuery} />
			<div className='titles'>
				<h4>Name</h4>
				<h4>Around Planet</h4>
				<h4>Body Type</h4>
			</div>
			<div>{data && <Bodies bodies={data.bodies} />}</div>
		</section>
	);
}

export default App;
