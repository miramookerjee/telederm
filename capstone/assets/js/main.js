// Import Webcam. Tutorial from: https://medium.com/swlh/how-to-access-webcam-and-take-picture-with-javascript-b9116a983d78#:~:text=Just%20call%20webcam.,download%20and%20save%20the%20snapshot
import Webcam from 'webcam-easy';

function setUp() {


	// initialize webcam object
	const webcamElement = document.getElementById('webcam');
	const canvasElement = document.getElementById('canvas');
	const snapSoundElement = document.getElementById('snapSound');
	const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

	// start webcam
	webcam.start()
	  .then(result =>{
	    console.log("webcam started");
	  })
	  .catch(err => {
	    console.log(err);
	});

	// take snapshot
	let picture = webcam.snap();
	document.querySelector('#download-photo').href = picture;
}