const initialState = {
	photos:[],
	photoselected:[]
}

const ReducerUser = (state = initialState, actions) => {
	console.log(actions)
	switch (actions.type) {
		case 'FETCH_USER':
			return {
				...state,
				photos: actions.payload
			}
			break;
		case 'ADD_PHOTO':
			return {
				...state,
				photoselected: state.photoselected.concat(actions.photo),
				photos: state.photos.filter(j => j.id !== actions.photo.id)
			}
			break;
		case 'REMOVE_PHOTO':
			return {
				...state,
				photos: state.photos.concat(actions.photo),
				photoselected: state.photoselected.filter(j => j.id  !== actions.photo.id)
			}
			break;
		default:
			break;
	}
	return state
}

export default ReducerUser