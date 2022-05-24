const BASE_URL = 'https://api.le-systeme-solaire.net/rest/bodies/';
const DATA_ORDER = '?order=aroundPlanet,desc/';
const fetchFromApi = async () => {
	const res = await fetch(`${BASE_URL}${DATA_ORDER}`)
		.then((data) => data.json())
		.catch((err) => console.log(err));
	return res;
};

export { fetchFromApi };
