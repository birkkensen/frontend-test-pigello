import { useState, useEffect } from 'react';
import { fetchFromApi } from './api';
import { BiSearch } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [data, setData] = useState();
	const [query, setQuery] = useState('');

	useEffect(() => {
		fetchFromApi(query).then(setData);
	}, [query]);

	return (
		<section className='container'>
			<div className='search-container'>
				<BiSearch />
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className='search-field'
					placeholder='Search bodies'
				/>
			</div>
			<div className='titles'>
				<h4>Name</h4>
				<h4>Around Planet</h4>
				<h4>Body Type</h4>
			</div>
			<div>
				{data &&
					data.bodies?.map((bodie) => {
						return (
							<div key={uuidv4()} onClick={() => console.log('Click')} className='bodies'>
								<p className='bodie'>{bodie.englishName}</p>
								<p className='bodie'>
									{bodie.aroundPlanet?.planet ? bodie.aroundPlanet?.planet : 'No Planet Data'}
								</p>
								<p className='bodie'>{bodie.bodyType}</p>
							</div>
						);
					})}
			</div>
		</section>
	);
}

export default App;
