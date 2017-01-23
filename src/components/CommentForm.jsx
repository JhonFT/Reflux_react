import React, { Component } from 'react';

class CommentForm extends Component{
	render(){
		return(
			<form
				onSubmit={this.props.onSubmit}
				class="commentForm"
			>
				<input
					type="text"
					name="author"
					placeholder="Su Nombre"
				/>
				<input
					type="text"
					name="text"
					placeholder="Firma! :D"
				/>
				<input
					type="hidden"
					name="id"
					value={ Date.now() }
				/>
				<input
					type="submit"
					value="Enviar! :D"
				/>
			</form>
		);
	}
}

export default CommentForm;