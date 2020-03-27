import React from 'react'
import { connect } from 'react-redux'

class PhotoSelected extends React.Component{
	constructor(props, {removeSelected}){
		super(props)
		this.state = {
            photo: '',
            value: '',
            comment: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.setState({comment: event.target.value});
    }
	render(){
		return (
			<div className="product-item-horizontal">
				<picture>
					<img src={this.props.photo.thumbnailUrl} alt={this.props.photo.name} />
				</picture>
				<div className="product-data">
					<h3>{this.props.photo.title} <small>Album: {this.props.photo.albumId}</small></h3>
                    {
                        (this.state.comment === '') ?
                        <form onSubmit={this.handleSubmit}>
                            <label>
                            Comentario:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Guardar" className="btn btn-default" />
                        </form>
                        :
                        <p>Comentario: {this.state.value}</p>
                    }
				</div>
                <div className="remove" onClick={()=> this.props.removeSelected(this.props.photo)}>X Quitar</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	store: state
})
const mapDispatchToProps = dispatch => ({
    removeSelected(photo){
        dispatch({
            type:'REMOVE_PHOTO',
            photo
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoSelected);
