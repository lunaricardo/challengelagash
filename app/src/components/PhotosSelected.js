import React, { Fragment } from "react"
import PhotoSelected from "./PhotoSelected"
import { connect } from 'react-redux';

const PhotosSelected = (props,{store}) => {
	if(props.isOff == '' || props.isOff == undefined){
		return null
	}
	return(
		<Fragment>
			<h3>Fotos seleccionadas</h3>
			<div className="category-selected">
				{
					// console.log(props.store)
					props.store.reducerUser.photoselected.map(photo => (<PhotoSelected photo={photo} key={photo.id}/>))
				}
			</div>
		</Fragment>
	)    
}

const mapStateToProps = state => ({
	store: state
})

export default connect(mapStateToProps, {})(PhotosSelected);
