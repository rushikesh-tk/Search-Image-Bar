import React from 'react';
import 'tachyons'
import unsplash from '../apis/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			images : []
		};
	}

	onSearchSubmit = (term) => {
		unsplash.get('/search/photos',{
			params : { query : term }
		}).then((response) => {
			this.setState({ images : response.data.results });
		});
	}

	render(){
		return (
		<div className="ui container" style={{ marginTop:"20px" }}>
			<SearchBar onSubmit={this.onSearchSubmit}/>
			<ImageList images={ this.state.images }/>
		</div>
	);
	}
}
export default App;