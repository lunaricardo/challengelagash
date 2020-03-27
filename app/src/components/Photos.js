import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import PhotosSelected from './PhotosSelected';

class Photos extends React.Component{
	constructor(props, {store}){
		super(props)
		this.state = {
			photos: '',
			isFetching: true,
		}
	}

	componentDidMount(){
		const url = 'https://jsonplaceholder.typicode.com/photos/';
		console.log('aca')
		fetch(url, {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json',
			}
		}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => this.setState({photos: response, isFetching: false}));
	}

	render(){
		if(this.state.isFetching){
			return (<p>Cargando...</p>)
		} else{
			return (
				<main>
					<div className="category-body">
						<div className="container">
								<PhotosSelected isOff={this.props.store.reducerUser.photoselected}/>
								<div className="category-products">
								{
									// console.log(this.props.store.reducerUser.photos)
									this.props.store.reducerUser.photos.map(photo => (<Photo photo={photo} key={photo.id} />))
								}
								</div>
	
						</div>
					</div>
				</main>
			)
		}
	}
}
const mapStateToProps = state => ({
	store: state
})

export default connect(mapStateToProps, {})(Photos);