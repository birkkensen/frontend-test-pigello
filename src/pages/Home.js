import { useState, useEffect } from 'react';
// import { inititalFetch, fetchMore } from '../api';
import { fetchAllBodies } from '../api';
import { Bodies, Searchbar } from '../components';
// import InfiniteScroll from 'react-infinite-scroll-component';
const Home = () => {
	const [data, setData] = useState({
		bodies: [],
	});
	const [query, setQuery] = useState('');
	useEffect(() => {
		fetchAllBodies().then(setData);
		// sessionStorage.setItem('data', JSON.stringify(data.bodies));
	}, []);
	// const handleClick = () => {
	// 	data.bodies.splice(0, 0, {
	// 		englishName: 'New body',
	// 		aroundPlanet: { planet: 'New Planet' },
	// 		bodyType: 'New Body',
	// 	});
	// };
	// ? A better way to fix the infinity scrolling. Should it all be fetched in the first one so the user can filter??
	return (
		<>
			<section className='bodies-container'>
				<Searchbar query={query} setQuery={setQuery} data={data} setData={setData} />
				{/* <button onClick={handleClick}>Add bodie</button> */}
				<div className='titles'>
					<h4>Name</h4>
					<h4>Around Planet</h4>
					<h4>Body Type</h4>
				</div>
				<div>
					{data && (
						// <InfiniteScroll
						// 	dataLength={data.bodies.length}
						// 	next={() => {
						// 		fetchMore().then(setData);
						// 	}}
						// 	hasMore={true}
						// >
						<Bodies bodies={data.bodies} />
						// {/* </InfiniteScroll> */}
					)}
				</div>
			</section>
		</>
	);
};

export default Home;
