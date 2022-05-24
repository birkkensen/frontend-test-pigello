import { useState, useEffect } from 'react';
import { fetchFromApi } from './api';

function App() {
	const [bodies, setBodies] = useState();
	useEffect(() => {
		fetchFromApi().then(setBodies);
	}, []);

	console.log(bodies);
	return <div>Hello world:)</div>;
}

export default App;
