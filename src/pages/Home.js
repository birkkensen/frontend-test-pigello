import { useState, useEffect } from 'react';
import { fetchFromApi, fetchMore } from '../api';
import { Bodies, Searchbar } from '../components';
import InfiniteScroll from 'react-infinite-scroll-component';
const Home = () => {
	const [data, setData] = useState({
		bodies: [],
	});
	const [query, setQuery] = useState('');
	useEffect(() => {
		fetchFromApi(query).then(setData);
	}, [query]);

	return (
		<>
			<section className='bodies-container'>
				<Searchbar query={query} setQuery={setQuery} />
				<div className='titles'>
					<h4>Name</h4>
					<h4>Around Planet</h4>
					<h4>Body Type</h4>
				</div>
				<div>
					{data && (
						<InfiniteScroll
							dataLength={data.bodies.length}
							next={() => {
								fetchMore().then(setData);
							}}
							hasMore={true}
						>
							<Bodies bodies={data.bodies} />
						</InfiniteScroll>
					)}
				</div>
			</section>
		</>
	);
};

export default Home;
