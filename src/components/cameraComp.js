import Webcam from 'react-webcam';
import React from 'react';
const Component = React.Component;

class Camera extends Component{

	state = {
		imageData: null,
		image_name: "image",
		saveImage: true
	}
	
	
	setRef = webcam => {
		this.webcam = webcam;
	};
	 
	capture = () => {
		const imageSrc = this.webcam.getScreenshot();
		
	};
 
	render() {
		const videoConstraints = {
		width: 1280,
		height: 720,
		facingMode: "user"
	};

	return (
			<div>
				<Webcam
					audio={false}
					height={350}
					ref={this.setRef}
					screenshotFormat="image/jpeg"
					width={500}
					videoConstraints={videoConstraints}
				/>
				<p></p>
				<button onClick={this.capture}>CAPTURE PHOTO</button>
			</div>

			
		);
	}
}


export default Camera;