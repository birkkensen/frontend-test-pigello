import { BiSearch } from 'react-icons/bi';
import { fetchAllBodies } from '../api';
const Searchbar = ({ query, setQuery, data, setData }) => {
	// Why does setQuery give the input one keystroke delay?
	// Why does it not filter on delete?
	const handleChange = (e) => {
		setQuery(e.target.value);
		if (e.target.value.length > 0) {
			const newData = data.bodies.filter(
				(bodie) =>
					bodie.englishName.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
					bodie.aroundPlanet?.planet.toLowerCase().startsWith(e.target.value.toLowerCase())
			);
			setData({ bodies: newData });
		} else {
			// TODO: Is there a better way? Most def
			// setData(JSON.parse(sessionStorage.getItem('data')));
			fetchAllBodies().then(setData);
		}
	};
	return (
		<div className='search-container'>
			<BiSearch />
			<input
				type='search'
				value={query}
				onChange={handleChange}
				className='search-field'
				placeholder='Search bodies'
			/>
		</div>
	);
};

export default Searchbar;
