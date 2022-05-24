const BASE_URL = 'https://api.le-systeme-solaire.net/rest/bodies';
const DATA_ORDER = 'order=aroundPlanet,desc';
const FILTER = 'filter[]=isPlanet,eq,false';
const fetchFromApi = async (query) => {
	const res = await fetch(`${BASE_URL}/?${DATA_ORDER}&${FILTER}&filter[]=id,sw,${query}`)
		.then((data) => data.json())
		.catch((err) => console.log(err));
	return res;
};

export { fetchFromApi };
