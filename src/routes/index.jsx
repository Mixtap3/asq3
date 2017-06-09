import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import StartPage from './StartPage';

const RootPage = () => (

	<BrowserRouter>
		<Route path={"/"} component={StartPage} />
	</BrowserRouter>

);

export default RootPage;

