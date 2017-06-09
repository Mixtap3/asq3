import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FooterView extends Component{

	render(){
		return(
		    <footer>
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-10 col-lg-offset-1 text-center">
		                    <h4><strong>asqill</strong>
		                    </h4>
		                    <p>Krukmakargatan 35 C
		                        <br />118 51 Stockholm</p>
		                    <ul className="list-unstyled">
		                        <li><i className="fa fa-phone fa-fw"></i> 073-970 69 64</li>
		                        <li><i className="fa fa-envelope-o fa-fw"></i> <a href="mailto:admin@asqill.com">admin@asqill.com</a>
		                        </li>
		                    </ul>
		                    <br />
		                    <ul className="list-inline">
		                        <li>
		                            <a href="#"><i className="fa fa-facebook fa-fw fa-3x"></i></a>
		                        </li>
		                        <li>
		                            <a href="#"><i className="fa fa-twitter fa-fw fa-3x"></i></a>
		                        </li>
		                        <li>
		                            <a href="#"><i className="fa fa-dribbble fa-fw fa-3x"></i></a>
		                        </li>
		                    </ul>
		                    <hr className="small" />
		                    <p className="text-muted">Copyright &copy; asqill 2017</p>
		                </div>
		            </div>
		        </div>
		        <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-chevron-up fa-fw fa-1x"></i></a>
		    </footer>
		    )
	}
}

export default FooterView;