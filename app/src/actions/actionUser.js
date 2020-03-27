const FETCH_USER = 'FETCH_USER'
const fetchUser = (dispatch) => {
	return (dispatch) => {
		// console.log("despacha")
		const url = 'https://jsonplaceholder.typicode.com/photos/';

		fetch(url, {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json',
			}
		}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => dispatch({ type: FETCH_USER, payload: response }));
	}
}

export default fetchUser