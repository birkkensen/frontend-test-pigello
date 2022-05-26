const BASE_URL = 'https://api.le-systeme-solaire.net/rest/bodies';
const DATA_ORDER = 'order=aroundPlanet,desc';
const fetchFromApi = async (query) => {
	const res = await fetch(
		`${BASE_URL}/?${DATA_ORDER}&filter[]=isPlanet,eq,false&filter[]=id,sw,${query}&page=1,21`
	)
		.then((data) => data.json())
		.catch((err) => console.log(err));
	return res;
};

export { fetchFromApi };
