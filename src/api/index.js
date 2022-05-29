const BASE_URL = 'https://api.le-systeme-solaire.net/rest/bodies';
const DATA_ORDER = 'order=aroundPlanet,desc';
let count = 20;
const fetchFromApi = async (query) => {
	const res = await fetch(
		`${BASE_URL}/?${DATA_ORDER}&filter[]=isPlanet,eq,false&filter[]=name,sw,${query}&page=1,20`
	)
		.then((data) => data.json())
		.catch((err) => console.log(err));
	return res;
};
const fetchMore = async () => {
	count += 20;
	const res = await fetch(`${BASE_URL}/?${DATA_ORDER}&filter[]=isPlanet,eq,false&page=1,${count}`)
		.then((data) => data.json())
		.catch((err) => console.log(err));
	return res;
};
export { fetchFromApi, fetchMore };
