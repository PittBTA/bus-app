import React, { Component } from 'react';


class CoolButton extends Component{
	constructor(props){
		super(props);
		this.state = { mood: ''};
	}

	render(){
		return(
			<div>
				<button className='happy' onClick = { (event) => 
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
					<body>
						<h2>HAPPY</h2>
					</body>
				}

				{this.state.mood == 'sad' &&
					<h2>SAD</h2>
				}

				{this.state.mood == 'neutral' &&
					<h2>NEUTRAL</h2>
				}



				

			</div>

			//the brackets thing is an if statement, you can use that and state values to display certain backgrounds and elements. 
			);
	}


}


export default CoolButton;
