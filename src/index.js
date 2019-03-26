import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar.js';
//import CoolButton from './components/coolButton';
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
		this.state = { mood: 'none'};
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
			<body className='App'>

					<div className = 'tesla'>DISCO PARTY</div>

						<button onClick = { (event) => 
							this.setState({ mood: 'happy'})}>
							HAPPY
						</button>
						
						<button onClick = { (event) => 
							this.setState({ mood: 'neutral'})}>
							NEUTRAL
						</button>

						<button onClick = { (event) => 
							this.setState({ mood: 'sad'})}>
							SAD
						</button>
						
						{this.state.mood == 'happy' &&
							<body className='Happy'>
								<h2>HAPPY</h2>
								<Camera></Camera>
							</body>
						}

						{this.state.mood == 'sad' &&
							<body className='Sad'>
								<h2>SAD</h2>
								<Camera></Camera>
							</body>
			
						}

						{this.state.mood == 'neutral' &&
							<body className='Neutral'>
								<h2>NEUTRAL</h2>
								<Camera></Camera>
							</body>
							
						}

						{this.state.mood == 'none' &&
							<Camera></Camera>
						}



						

			</body>
		);
	}


}


/*

const App = function(){
	return <div>hey</div>;

}

this whole sections is a class, not an instance of the class. Therefore, you need to create an instance before we 
pass it to reactDom.

*/


ReactDOM.render(<App />, document.querySelector('.container'));







