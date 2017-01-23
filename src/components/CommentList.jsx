import React, { Component } from 'react';
import Comment from './Comment.jsx';

class CommentList extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<div class="CommentList">
				{this.props.comments
					.map(comment => {
						return (
							<Comment
								key={comment.id}
								comment={comment}
							/>)
					})
				}
			</div>
		);
	}
}

export default CommentList;