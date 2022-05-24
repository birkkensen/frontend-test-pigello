import { useState, useEffect } from 'react';
import { fetchFromApi } from './api';
import { BiSearch } from 'react-icons/bi';

function App() {
	const [data, setData] = useState();
	useEffect(() => {
		fetchFromApi().then(setData);
	}, []);

	console.log(data);
	return data ? (
		<section className='container'>
			<div className='search-container'>
				<BiSearch />
				<input className='search-field' placeholder='Search bodies' />
			</div>
			<div className='titles'>
				<h4>Name</h4>
				<h4>Around Planet</h4>
				<h4>Body Type</h4>
			</div>
			<div>
				{data.bodies.map((bodie) => {
					return (
						<div className='bodies'>
							<p>{bodie.englishName}</p>
							<p>{bodie.aroundPlanet?.planet}</p>
							<p>{bodie.bodyType}</p>
						</div>
					);
				})}
			</div>
		</section>
	) : (
		<div>Loading...</div>
	);
}

export default App;
