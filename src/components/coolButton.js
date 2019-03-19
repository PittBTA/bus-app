import React, { Component } from 'react';


class CoolButton extends Component{
	constructor(props){
		super(props);
		this.state = { data: ' '};
	}

	render(){
		return(
			<div className = 'c'>
				<button onClick = { (event3) => 
					this.setState({ data: 'Accessing /Desktop. Unzipping paint.exe... Painting rainbows on user\'s desktop....'})}/>
				Console Messages: {this.state.data}
			</div>
			);
	}


}


export default CoolButton;
