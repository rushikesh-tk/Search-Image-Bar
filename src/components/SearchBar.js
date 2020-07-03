import React from 'react';

class SearchBar extends React.Component {

	constructor(props){
		super(props);

		this.state = { term : ""};
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render(){
		return (
			<form className="ui form" onSubmit={this.onFormSubmit}>
				<div className="field">
					<label className="dim" htmlFor="img">Search Image</label>
					<div className="shadow-5 grow">
						<input
							value={this.state.term}
							onChange={(e) => this.setState({ term : e.target.value})}
							type="text"
							id="img"
						/>
					</div>
				</div>
			</form>
		);
	}
}

export default SearchBar;