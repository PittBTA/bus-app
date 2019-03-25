import React from 'react';
import PostData from '../data/posts.json'
const Component = React.Component;

class SearchBar extends Component{
	constructor(props){
		super(props);

		//if there is a parent method that is already defined in the parent class (in this case Component) you can call the method of the
		//parent class using super.

		//this.state = { term: 'Type in me.' , stuff: ' ', SearchValue: ''};
		//this.handleChange = this.handleChange.bind(this);
		this.state= { SearchValue: ''}
	
	}

	render(){
		return(
			<div>
				<form>
				<label className='text'>
					SearchTerm:
					 <input className = 'searchbar'
					 value = {this.state.SearchValue}
					 onChange={(event) => this.setState({SearchValue: event.target.value})}/>

					<div className = 'notes'>
					 
					 </div>

















					 

					</label>
				</form>
			</div>
		);
	}

}

/*
	render() {
		//return <input onChange= {this.handleInputChange} />  
		//if you do it this way, you have to write a separate function. below is shorthand version. 
		return(
			<div>
				<button onClick= {(event2) => this.setState({ term: 'earsing macbook...'})}></button>

				<input className = 'searchbar'
				value= {this.state.term} //current value is {this.state.term}
				onChange={(event) => this.setState({ term: event.target.value })}/>

				<div className = 'text'>{this.state.term}</div>
				<form>
					<label className = 'entersearch'>
						SearchTerm: 
						<input type="text" name="name"/>

					</label>
						<input type="submit" value="submit"/>
					</form>

			</div>

			
		);
	}
*/





export default SearchBar;