import React, { Component, PropTypes } from 'react';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

class CommentBox extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div class="commentBox">
				<CommentForm onSubmit={this.props.onSubmit} />
				<CommentList comments={this.props.data} />
			</div>
		);
	}
}

CommentBox.propTypes = {
	data: PropTypes.array
}

export default CommentBox;
