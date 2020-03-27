import React from 'react';
import { connect } from 'react-redux';
import actionUser from '../actions/actionUser';


const HeaderNav = ({store}) => {
	return (
		<header>
			<div className="container">
				<nav className="navbar">
						<div className="brand">
							<img src="https://www.lagash.com/img/logo-lagash.svg" alt="Lagash" width="100" />
						</div>
						<div className="user">
							<div className="user-name">Ricardo Luna</div>
						</div>
				</nav>
			</div>
		</header>
	)
}

const mapStateToProps = state => ({
	store: state
})

export default connect(mapStateToProps,actionUser)(HeaderNav);