const BASE_URL = 'https://api.le-systeme-solaire.net/rest/bodies/';
const fetchFromApi = async () => {
	const res = await fetch(BASE_URL)
		.then((data) => data.json())
		.catch((err) => console.log(err));
	return res;
};

export { fetchFromApi };
