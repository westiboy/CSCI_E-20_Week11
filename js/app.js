//The application
$(document).ready(function(){
	// Draw a 90&deg; arc
	$('#button1').click(function(){
		$('#canvas1').drawArc({
		  strokeStyle: '#909',
		  strokeWidth: 5,
		  x: 200, y: 200,
		  radius: 50,
		  fillStyle: '#f0f'
		})
		.drawArc({
			fillStyle: '#4a0',
			x: 100,
			y: 100,
			radius: 25
		})
		.drawArc({
			fillStyle: '#345678',
			x: 300,
			y: 150,
			radius: 100
		}); //end drawArc
	}); //end click

	$('#clear').click(function(){
		$('#canvas1').clearCanvas();
	}); //end click-clear

	$('#button2').click(function(){
		//draw the rectangle
		$('#canvas2').drawRect({
			layer: true,
			name: 'box',
			fillStyle: '#fc9',
			strokeStyle: '#963',
			strokeWidth: 5,
			x: 100,
			y: 60,
			width: 100,
			height: 60
		}); //end drawRect

		//animate the rectangle
		$('#canvas2').animateLayer('box',{
			x: 220,
			y: 150
		},2500); //end canvas2 animateLayer
	}); //end click-to-animate

	$('#button3').click(function(){
		$('#canvas3').drawText({
			layer: true,
			fillStyle: '#9cf',
			strokeStyle: '#25a',
			strokeWidth: 2,
			x: 120,
			y:100,
			fontSize: '32px',
			fontFamily: 'Verdana, sans-serif',
			text: 'Canvas Rocks!',
			click: function(){
				//click to make the text grow
				$(this).animateLayer(0, {
					scale: '+=0.25'
				}, 250);
			} //end click scale function
		}); //end drawText
	}); //end click-to-write
}); //end ready
