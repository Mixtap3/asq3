import React from 'react';

import {FooterView} from '../components/Footer';
import {HeaderView} from '../components/Header';

import css from '../static/css/bootstrap.css';
import css2 from '../static/css/bootstrap.min.css';
import styles from '../static/css/stylish-portfolio.css';



class StartPage extends React.Component {
	render() {
		return(
			<div className="wrapper">
				<HeaderView/>
				<FooterView/>
			</div>
		);
	}
}

export default StartPage;