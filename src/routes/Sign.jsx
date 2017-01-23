import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import Relfux from 'reflux';
import CommentBox from '../components/CommentBox.jsx';
import CommentStore from '../stores/CommentStore.jsx';
import CommentActions from '../actions/CommentActions.jsx';
import $ from 'jquery';

@ReactMixin.decorate(Relfux.connect(CommentStore,'comments'))
class Sign extends Component{

	componentDidMount(){
		CommentActions.fetchComments();
	}

	onSubmitSendComment(ev){
		let data = $(ev.target).serializeArray();
		let comment = {
			author: data[0].value,
			text: data[1].value,
			id: data[2].value
		}
		CommentActions.sendSign(comment);
		ev.preventDefault();
	}

	render(){
		if(this.state.comments){
			return(
				<div class="sign">
					<CommentBox
						onSubmit={this.onSubmitSendComment.bind(this)}
						data={this.state.comments}/>
				</div>
			);
		}else{
			return(
				<div class="sign">
					<h1>Loading</h1>
				</div>
			);
		}
		
	}
}

export default Sign;