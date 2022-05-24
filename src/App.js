import { useState, useEffect } from 'react';
import { fetchFromApi } from './api';

function App() {
	const [data, setData] = useState();
	useEffect(() => {
		fetchFromApi().then(setData);
	}, []);

	console.log(data);
	return <div>Hello world:)</div>;
}

export default App;
