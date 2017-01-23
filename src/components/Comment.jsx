import React, { Component } from 'react';

class Comment extends Component {

	render(){
		return(
			<div class="comment">
				<h2>{this.props.comment.author}</h2>
				<p>{this.props.comment.text}</p>
			</div>
		);
	}
}
export default Comment;