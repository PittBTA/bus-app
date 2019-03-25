import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar.js';
import CoolButton from './components/coolButton';
import PostList from './components/posts.js';
import Webcam from 'react-webcam';
import Camera from './components/cameraComp.js'
import './App.css';

const API_KEY = "INSERT_API_KEY_HERE";

const Component = React.Component;

//ALL REACT COMPONENTS MUST START WITH AN UPPERCASE LETTER.

class App extends Component {
	constructor(props){
		super(props);


/*
		this.state = { videos: [] }
		YTSearch({key: API_KEY, term: 'Elon Musk'}, (videos) => {
			this.setState({ videos: videos });

			//shorthand version since key name is identical to name of the data returned from the function call
			//this.setState({ videos });
		});
*/
	}

	render(){

	
		return (
			<body className ='App'>

				<h2 className = 'Apples'></h2>
					<div className = 'tesla'>DISCO PARTY</div>
						
						<SearchBar></SearchBar>

						<CoolButton></CoolButton>
						

					

						
						<Camera className='Camera'></Camera>
				

			</body>
		);
	}


}




const mood = "happy";
/*

const App = function(){
	return <div>hey</div>;

}

this whole sections is a class, not an instance of the class. Therefore, you need to create an instance before we 
pass it to reactDom.

*/


ReactDOM.render(<App />, document.querySelector('.container'));