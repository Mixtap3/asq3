import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StudentFormContainer} from '../../StudentForm';

class HeaderView extends Component{
	

	render(){

		return(
			<header id="top" className="header">
				<div className="text-vertical-center">
					<img className="logo" src="../../../static/img/utanCirkelCropped.png" />
		            <h2 className="subTitle">Sign up now!</h2>
		            <br />
		            <StudentFormContainer/>
		        </div>
	        </header>
	       		)
	}
}

export default HeaderView;