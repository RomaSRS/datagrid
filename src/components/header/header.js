import React from 'react'
import { connect } from 'react-redux'


const Header = ({ virtualization, handleToggleVirtualization }) => {
	return (
		<nav className="navbar navbar-dark bg-primary">
			<div className="container-fluid">
			  <a className="navbar-brand" href="/">This is a data grid </a>
				<button className="btn btn-secondary"
					onClick={handleToggleVirtualization} >
					{virtualization ? 'Disable virtualization' : 'Enable virtualization'}
				</button>
			</div>
		</nav>
	)
}

const mapStateToProps = ({ general: { virtualization }}) => {
	return {
		virtualization
	}
}

export default connect (mapStateToProps)(Header)