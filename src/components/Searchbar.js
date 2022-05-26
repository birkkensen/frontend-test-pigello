import { BiSearch } from 'react-icons/bi';
const Searchbar = ({ query, setQuery }) => {
	const handleChange = (e) => {
		setQuery(e.target.value);
	};
	return (
		<div className='search-container'>
			<BiSearch />
			<input
				value={query}
				onChange={handleChange}
				className='search-field'
				placeholder='Search bodies'
			/>
		</div>
	);
};

export default Searchbar;
