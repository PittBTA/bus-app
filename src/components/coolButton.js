import React, { Component } from 'react';


class CoolButton extends Component{
	constructor(props){
		super(props);
		this.state = { mood: ''};
	}

	render(){
		return(
			<div>
				<button onClick = { (event) => 
					this.setState({ mood: 'yes'})}>happy
				</button>
				
				
				<button onClick = { (event) => 
					this.setState({ mood: 'yes'})}>Neutral
				</button>


				<button onClick = { (event) => 
					this.setState({ mood: 'yes'})}>Sad
				</button>
				
				{this.state.mood == 'yes' &&
					<p>
						can you see me?
					</p>
				}



				

			</div>

			//the brackets thing is an if statement, you can use that and state values to display certain backgrounds and elements. 
			);
	}


}


export default CoolButton;
