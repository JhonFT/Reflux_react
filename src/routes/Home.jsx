import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component{
	render(){
		return(
			<div class="home">
				<h1>Ract Facilito, Pasa y Firma :D!</h1>
				<Link to="sign">Firma ahora :D!</Link>
			</div>
		);
	}
}

export default Home;