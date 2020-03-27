import React from 'react'
import { connect } from 'react-redux'

class Photo extends React.Component{
	constructor(props, {selectPhoto}){
		super(props)
		this.state = {
			product: '',
		}
	}
	
	render(){
		return (
			<div className="product-item">
				<div className="bag prt"></div>
				<picture>
					<img src={this.props.photo.thumbnailUrl} alt={this.props.photo.title} />
				</picture>
				<div className="product-data">
					<h5>{this.props.photo.albumId}</h5>
					<h3>{this.props.photo.title}</h3>
				</div>
				<div className="overlay">
					{/* {console.log(this.props.store)} */}
					<button className="btn btn-white" onClick={()=> this.props.selectPhoto(this.props.photo)}>
						Select
					</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	store: state
})

const mapDispatchToProps = dispatch => ({
	selectPhoto(photo){
		dispatch({
			type: 'ADD_PHOTO',
			photo
		})
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Photo);
